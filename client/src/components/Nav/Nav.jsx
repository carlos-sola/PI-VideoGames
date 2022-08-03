import React, { Component, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo1-videogames.png';
import { getVideogameByName, setLoading, setMenu } from '../../redux/actions';
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
        setBusqueda('')
        dispatch(setLoading(true))

    }
    const handleOnClick = () =>{
        dispatch (setMenu(!menu))
    }

    return <nav className='navbar'>
             <img className='logo' src={Logo} alt=''/>
             <div className='search'>
                 <input className='input' value={busqueda} onChange={e=>handleOnChange(e)} type="text" placeholder=' Buscar juego...' />
                 <button onClick={()=>handleOnSearch()} className='boton'>BUSCAR</button>
             </div>
             
             <button className='menu' onClick={handleOnClick}>Menú</button>
           </nav>
}