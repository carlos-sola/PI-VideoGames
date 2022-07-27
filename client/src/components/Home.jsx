import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllVideogames } from '../redux/actions';
import Cards from './Cards'
import NavBar from './Nav/Nav'


export default function Home() {

    let dispatch = useDispatch();
    const videoGames = useSelector(state=>state.allvideogames)
    console.log(videoGames,'1')

    useEffect(() => {
        dispatch(getAllVideogames())
        console.log(videoGames,'2')

    },[])
    return (
        <div>
            <NavBar/>
            {videoGames?.totalInfo?.results?.map(v => {
                return <div> {v.name}</div>
            })}
            <Cards/>
        </div>)
}