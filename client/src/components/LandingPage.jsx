import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage () {
    return <div className='fondo-landing'>
            <h1 className='bienvenido'>¡Bienvenido!</h1>
            <Link to="/home"><button className='boton-landing'> <h2>Home</h2></button></Link>
            </div>
} 