import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Card from '../Card/Card'
import './Cards.css'


export default function Cards () {
   const showVideogames = useSelector(state => state.showVideogames);
   
    return <div className='cards-wrapper'>
            <div className='cards-container'>
            {showVideogames?.map(p=>{
                    return  <Link key={p.id} to={`/detail/${p.id}`}>
                        <Card  
                        name={p.name}
                        gender={p.genders} 
                        image={p.image} 
                        rating={p.rating} />
                    </Link>
                    
            })}
            </div>
    </div> 
}