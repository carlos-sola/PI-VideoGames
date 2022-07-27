import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo1-videogames.png';
import "./Nav.css";

export default function NavBar() {
    const handleChange = (name) =>{

    }

    return <nav className='navbar'>
             <img className='logo' src={Logo} alt=''/>
             <div className='search'>
                 <input type="text" placeholder='buscar juego por nombre...' />
                 <button className='boton'>buscar</button>
             </div>
             
             <div className='menu'>Menú</div>
           </nav>
}