import './Create.css'
import React, { useEffect, useState } from 'react';
import { getGenders, getPlatforms } from '../../redux/actions';
import { Link } from 'react-router-dom'

export default function CreateNewVideogame () {
    const [newGame,setNewGame] = useState({
        name:"",
        description:"",
        releaseDate:"",
        platform:[],
        image:"",
        gender:[],
        rating:"",
    })
    const [genders,setGenders] = useState([])  
    const [platforms,setPlatforms] = useState([])
    const getGendersAndPlatforms = async()=>{
        const response = await getGenders()
        setGenders(response.data.result)
        const infoPlatform= await getPlatforms()
        setPlatforms(infoPlatform.data.result)
    }
    useEffect(()=>{
        getGendersAndPlatforms ();
    },[])
    
    return <div className='create-videogame'>Crear nuevo Videogame
                <form className='formulario'>
                    <label> Nombre: </label>
                    <input type="text" name="name" value={newGame.name}/>
                    <br/>
                    <label> Descripción: </label>
                    <textarea name="description"/>
                    <br/>
                    <label> Imagen: </label>
                    <input type='url' name='image'/>
                    <br/>
                    <label>Lanzamiento: </label>
                    <input type="date" name='releasDate'/>
                    <br/>
                    <label>Plataformas: </label>
                    <input className='form-platform' list="platform"/>    
                    <datalist id="platform">
                    {platforms.map(e=>{
                        return <option key={e.name} value={e.name}>{e.name}</option>
                
                    })}
                    </datalist>
                  
                    <br/>
                    <label>Géneros: </label>
                    <input className='form-gender' list="gender"/>
                    <datalist id="gender">  
                        {genders.map(e=>{
                        return <option key={e.name} value={e.name}>{e.name}</option>
                
                    })}
                    </datalist>
                    <br/>
                    <label> Rating: </label>
                    <input type="number" name='rating'/>
                </form>
                <Link to="/home"><button className='boton-atras'><h4>atrás</h4></button></Link>
             <div className='detalle-container'></div>
    </div>
}