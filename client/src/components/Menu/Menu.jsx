import './Menu.css';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { filterByGender,filterByOrigin,getGenders} from '../../redux/actions';
import { Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';



export default function Menu () {
    const dispatch = useDispatch()
    const menu = useSelector(state => state.menu);
    const [genders, setGenders] = useState([])
    const fetchGender = async () => {
        const response = await getGenders()
        setGenders(response.data.result)
    }
    function handleSelect(e){
        dispatch(filterByGender(e.target.value))
        console.log('hola')
    }
    function handleSelect1(e){
        dispatch(filterByOrigin(e.target.value))
        console.log('hola')
    }
    
    useEffect(() => {
        fetchGender();
    }, [])
    return <div className={`menu-container ${menu ? "open" : ""}`}>
        <label>Ordenamiento</label>
        <select>
            <option value="value1">A-Z</option>
            <option value="value2">Z-A</option>
            <option value="value3">Rating</option>
        </select>
        <label>filtrar por Géneros</label>
        <select onChange={handleSelect}>
        <option key="All" value="All">All</option>
        {genders?.map(e => {
                    return <option key={e.name} value={e.name}>{e.name}</option>

                })}
        </select>
        <br/>
        <label>Filtrar por Origen</label>
        <select onChange={handleSelect1}>
            <option value="Created">Creados</option>
            <option value="Existentes">Existentes</option>
        </select>
        <button className="limpiar-filtros">LIMPIAR FILTROS</button>
        <Link to="/home/create" className="to-create"><button className="btn-create">CREAR VIDEOGAME</button></Link>

    </div>
}