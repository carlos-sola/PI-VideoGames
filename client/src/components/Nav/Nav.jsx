import React, { Component, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo1-videogames.png';
import { getVideogameByName, setMenu } from '../../redux/actions';
import "./Nav.css";

export default function NavBar() {
    const [busqueda,setBusqueda] = useState('')
    let dispatch = useDispatch()
    const menu= useSelector((state)=>state.menu);
    const handleOnChange = (e)=>{
        setBusqueda(e.target.value)
    }
    const handleOnSearch = () =>{
        dispatch(getVideogameByName(busqueda));
        setBusqueda(' ')
    }
    const handleOnClick = () =>{
        dispatch (setMenu(!menu))
    }

    return <nav className='navbar'>
             <img className='logo' src={Logo} alt=''/>
             <div className='search'>
                 <input className='input' onChange={e=>handleOnChange(e)} type="text" placeholder='buscar juego por nombre...' />
                 <button onClick={()=>handleOnSearch()} className='boton'>BUSCAR</button>
             </div>
             
             <button className='menu' onClick={handleOnClick}>Menú</button>
           </nav>
}