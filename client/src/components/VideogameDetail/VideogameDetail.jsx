import { Link,useParams } from 'react-router-dom'
import './VideogameDetail.css';
import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getVideogameDetail } from '../../redux/actions';




export default function VideogameDetail () {
    let detail= useSelector(state => state.videoGameDetail);
    let dispatch = useDispatch();
    let { id } = useParams()
    useEffect(() => {
        dispatch(getVideogameDetail(id))
    },[detail,id])
    return <div className='Detail'>
            <h2>{detail.name}</h2>
            <Link to="/home"><button className='boton-atras'><h2>atras</h2></button></Link>
            </div>
} 