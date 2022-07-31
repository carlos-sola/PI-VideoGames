import React, { Component, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo1-videogames.png';
import { getVideogameByName } from '../../redux/actions';
import "./Nav.css";

export default function NavBar() {
    const [busqueda,setBusqueda] = useState('')
    let dispatch = useDispatch()

    const handleOnChange = (e)=>{
        setBusqueda(e.target.value)
    }
    const handleOnSearch = () =>{
        dispatch(getVideogameByName(busqueda));
        setBusqueda(' ')
    }


    return <nav className='navbar'>
             <img className='logo' src={Logo} alt=''/>
             <div className='search'>
                 <input className='input' onChange={e=>handleOnChange(e)} type="text" placeholder='buscar juego por nombre...' />
                 <button onClick={()=>handleOnSearch()} className='boton'>BUSCAR</button>
             </div>
             
             <div className='menu'>Menú</div>
           </nav>
}