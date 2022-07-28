import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Card from '../Card/Card'
import './Cards.css'


export default function Cards () {
   const showVideogames = useSelector(state => state.showVideogames);
        console.log(showVideogames);

   
    return <div className='cards-wrapper'>
            <div className='cards-container'>
            {showVideogames?.map(p=>{
                    return <Card key={p.id} name={p.name} gender={p.genders} image={p.image} rating={p.rating} />
            })}
            </div>
    </div> 
}