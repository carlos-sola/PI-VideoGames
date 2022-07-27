import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage () {
    return <div>
            <h1>Bienvenido</h1>
            <Link to="/home"><button> <h2>Home</h2></button></Link>
            </div>
} 