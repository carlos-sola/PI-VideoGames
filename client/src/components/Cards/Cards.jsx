import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Card from '../Card/Card'
import './Cards.css'
import Paginado from '../Paginado/Paginado'


export default function Cards () {
    const loading = useSelector (state=> state.loading)
   const showVideogames = useSelector(state => state.showVideogames);
   // PAGINADO
   const [currentPage, setCurrentPage] = useState(1);
   const [videogamePerPage, setGamePerPage] = useState(8);
   const indexOfLastGame = currentPage * videogamePerPage;
   const indexOfFirstGame = indexOfLastGame - videogamePerPage;
   const currentVideogame = showVideogames.slice(indexOfFirstGame,indexOfLastGame);

   const paginado=(pageNumber)=>{
           setCurrentPage(pageNumber)
   }
    if(loading){
        return <div className='cards-wrapper'><h2 className="cargando">Cargando...</h2>
        </div>
    }
    if(!showVideogames?.length){
        return <div className='cards-wrapper' ><h2 className="cargando1">No se encontró ningún juego!!</h2>
        </div>
    }
   
    return <div className='cards-wrapper'>
            <div className='cards-container'>
            {currentVideogame?.map(p=>{
                    return  <Link key={p.id} to={`/detail/${p.id}`} className="to-detail">
                        <Card  
                        name={p.name}
                        gender={p.genders} 
                        image={p.image} 
                        rating={p.rating} />
                    </Link>
                    
            })}
            </div>
            <div className='paginado-container'>
                <Paginado 
            videogamePerPage={videogamePerPage}
            showVideogames={showVideogames.length}
            paginado={paginado}
            />
            </div>
    </div> 
}