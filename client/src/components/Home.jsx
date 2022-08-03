import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllVideogames, setLoading } from '../redux/actions';
import Cards from './Cards/Cards'
import NavBar from './Nav/Nav'
import './Home.css'
import Menu from './Menu/Menu';


export default function Home() {

    let dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(getAllVideogames())
        dispatch(setLoading(true))
       

    },[])
    return (
        <>
            <NavBar/>
            <Cards/>
            <Menu/>
        </>)
}