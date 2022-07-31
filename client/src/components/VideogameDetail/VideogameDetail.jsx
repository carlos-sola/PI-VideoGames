import { Link,useParams } from 'react-router-dom'
import './VideogameDetail.css';
import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getVideogameDetail } from '../../redux/actions';
import logo from '../../assets/images/logo1-videogames.png'




export default function VideogameDetail () {
    let detail= useSelector(state => state.videoGameDetail);
    let dispatch = useDispatch();
    let { id } = useParams()
    useEffect(() => {
        dispatch(getVideogameDetail(id))
    },[])
    return <div className='detail'>
             <div className='carddetail'>
             <Link to="/home"><button className='boton-atras'><h4>atrás</h4></button></Link>
             <div className='detalle-container'>
             <h2 className="nombre-detail">{detail?.name ? detail.name:"Buscando videogame..."}</h2>
              <img className="imagen-detail" src={detail?.background_image ? detail.background_image:logo} />
              <p className="description">{detail?.description}</p>
              <h4>Lanzamiento: {detail?.released}</h4>
              <h4>Rating: {detail?.rating}</h4>
              <h4>Plataformas: {detail?.parent_platforms?.map(g=>{
                return <span> {g.platform.name} -</span>
            })}</h4>
            <h4>Géneros: {detail?.genres?.map(g=>{
                return <span className='generos-detail'> {g.name} </span>
            })}</h4>
            <Link to={detail.website} target="_blank"><p className="link">{detail?.website}</p></Link>
             </div> 
             </div>
            </div>
} 