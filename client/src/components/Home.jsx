import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllVideogames } from '../redux/actions';
import Cards from './Cards/Cards'
import NavBar from './Nav/Nav'


export default function Home() {

    let dispatch = useDispatch();
    const videoGames = useSelector(state=>state.allvideogames)
    

    useEffect(() => {
        dispatch(getAllVideogames())
       

    },[])
    return (
        <>
            <NavBar/>
            <Cards/>
        </>)
}