import { Link,useParams } from 'react-router-dom'
import './VideogameDetail.css';
import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getVideogameDetail, setLoading } from '../../redux/actions';
import logo from '../../assets/images/logo1-videogames.png'




export default function VideogameDetail () {
    let loading = useSelector(state=>state.loading)
    let detail= useSelector(state => state.videoGameDetail);
    let dispatch = useDispatch();
    let { id } = useParams()
    useEffect(() => {
        dispatch(getVideogameDetail(id))
        dispatch(setLoading(true))
    },[])
    if(loading){
        return <div className='detail'><h2 className="cargando">Cargando...</h2></div>
    }
    return <div className='detail'>
             <div className='carddetail'>
                 <div className="sup"><Link to="/home"><button className='boton-atras'><h4>atrás</h4></button></Link>
             <img className='logo12' src={logo} alt=''/></div>
             <div className='detalle-container'>
             <h2 className="nombre-detail">{detail?.name ? detail.name:"Buscando videogame..."}</h2>
              <img className="imagen-detail" src={detail?.background_image ? detail.background_image:detail.image ? detail.image : logo} />
              <p className="description">{detail?.description?.replace(/<\/?.*?>/,"")}</p>
              <br/>
              { (detail?.released || detail?.releasDate) && <h4>Lanzamiento: {detail?.released ? detail.released : detail.releasDate}</h4>}
            
              {(detail?.rating)&&<h4>Rating: {detail?.rating}</h4>}
    
              {(detail?.platforms) &&   <h4>Plataformas: {detail?.platforms?.map((g, i)=>{
                return <span key={i}> {g.platform.name} -</span>
            })}</h4> }
               {(detail?.platform) &&   <h4>Plataformas: {detail?.platform?.map((g,i)=>{
                return <span key={i}> {g} -</span>
            })}</h4> }
          
            {(detail?.genres) && <h4>Géneros: {detail?.genres?.map((g,i)=>{
                return <span key={i} className='generos-detail'> {g.name} </span>
            })}</h4> }
            {(detail?.genders) && <h4>Géneros: {detail?.genders?.map((g,i)=>{
                return <span key={i} className='generos-detail'> {g.name} </span>
            })}</h4> }
            <br/>
            <p className="link">Web: {detail?.website}</p>
             </div> 
             </div>
            </div>
} 