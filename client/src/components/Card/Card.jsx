import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import Logo from '../../assets/images/logo1-videogames.png';

export default function Card ({id,name,rating,gender,image}) {
    return <div className='container'>
            <img className='imagen' src={image ? image:Logo}/>
            <p>Nombre:{name}</p>
            <p>Género:{gender}</p>
            <p>Rating:{rating}</p>
            <p>{id}</p>
        </div>
}