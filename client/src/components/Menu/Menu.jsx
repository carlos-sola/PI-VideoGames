import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { useSelector } from 'react-redux';


export default function Menu () {
    const menu = useSelector(state => state.menu);
    return <div className={`menu-container ${menu ? "open" : ""}`}>
        <select>Ordenar por
            <option value="value1">A-Z</option>
            <option value="value2">Z-A</option>
        </select>
        <select>filtrar por
            <option value="value1">Géneros</option>
            <option value="value2">ORIGEN</option>
        </select>
        <button>LIMPIAR FILTROS</button>
        <Link to="/home/create" className="to-create">CREAR VIDEOGAME</Link>

    </div>
}