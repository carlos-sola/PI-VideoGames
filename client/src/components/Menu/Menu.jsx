import './Menu.css';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { filterByGender,filterByOrigin,getGenders, sortAtoZ,resetFilter} from '../../redux/actions';
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

    }
    function handleFilter(e){
        dispatch(filterByOrigin(e.target.value))
    }
    function handleSort(e){
        dispatch(sortAtoZ(e.target.value))    
    }
    function resteFilters(e){
        dispatch(resetFilter(e.target.value))    
    }
    
    
    useEffect(() => {
        fetchGender();
    }, [])
    return <div className={`menu-container ${menu ? "open" : ""}`}>
        <label>Ordenamiento</label>
        <select className="input-form" onChange={handleSort}>
            <option value="Z-A">Z-A</option>
            <option value="A-Z">A-Z</option>
            <option value="AscRating">Rating Asc</option>
            <option value="DescRating">Rating Desc</option>
        </select>
        <br/>
        <label>filtrar por Géneros</label>
        <select className="input-form" onChange={handleSelect}>
        <option key="All" value="All">All</option>
        {genders?.map(e => {
                    return <option key={e.name} value={e.name}>{e.name}</option>

                })}
        </select>
        <br/>
        <label>Filtrar por Origen</label>
        <select className="input-form" onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Created">Creados</option>
            <option value="Existentes">Existentes</option>
        </select>
        <br/>
        <button className="limpiar-filtros" onClick={resteFilters}>LIMPIAR FILTROS</button>
        <br/>
        <Link to="/home/create" className="to-create"><button className="btn-create">CREAR VIDEOGAME</button></Link>

    </div>
}