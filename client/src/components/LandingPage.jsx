import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import Logo1 from '../assets/images/logo1-videogames.png'

export default function LandingPage () {
    return <div className='fondo-landing'>
            <img className='logo1' src={Logo1} alt=''/>
            {/* <h1 className='bienvenido'>¡Bienvenido!</h1> */}
            <Link to="/home"><button className='boton-landing'> <h2>Inicio</h2></button></Link>
            </div>
} 