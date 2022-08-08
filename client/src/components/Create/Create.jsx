import './Create.css'
import React, { useEffect, useState } from 'react';
import { createVideogame, getGenders, getPlatforms } from '../../redux/actions';
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import logo from '../../assets/images/logo1-videogames.png'

export default function CreateNewVideogame() {
    function validate(newVideog) {
        let errors = {}
        if (!newVideog.name) {
            errors.name = "Se requiere un nombre"
        } else if (!newVideog.description) {
            errors.description = "Completar descripcion del videojuego"
        } else if (!newVideog.rating) {
            errors.rating = "Completar rating"
        }  else if (!newVideog.image) {
            errors.image = "Completar con una url de la imagen del videojuego"
        } else if (!newVideog.platform.length) {
            errors.plataform = "Completar plataformas"
        } else if (!newVideog.gender.length) {
            errors.gender = "Completar géneros"
        }
        return errors
    }

    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    const history = useHistory()
    const [newGame, setNewGame] = useState({
        name: "",
        description: "",
        releaseDate: "",
        platform: [],
        image: "",
        gender: [],
        rating: "",
    })
    function handleChange(e) {
        setNewGame({
            ...newGame,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...newGame,
            [e.target.name]: e.target.value
        }))
    }
    function handleSelect(e) {
        if (!newGame[e.target.name].includes(e.target.value)){
            setNewGame({
                ...newGame,
                [e.target.name]: [...newGame[e.target.name], e.target.value]
            })
        }    
        
    }
    function handleDelete(e,el) {
        e.preventDefault()
        setNewGame({
            ...newGame,
            [e.target.name]: newGame[e.target.name].filter((v) => {
                return v != el
            })
        })
    }
  
    function handleSumbit(e) {
        e.preventDefault();
        if(!Object.keys(errors).length){
        dispatch(createVideogame(newGame))
        alert("Videogame creado con éxito!!")
        setNewGame({
            name: "",
            description: "",
            releasDate: "",
            platform: [],
            image: "",
            gender: [],
            rating: "",
        })
        history.push('/home')
        } else {
            alert("NO SE CREÓ EL VIDEOGAME ¡Por favor completa todos los campos!")
        }
        
    }

    const [genders, setGenders] = useState([])
    const [platforms, setPlatforms] = useState([])
    const getGendersAndPlatforms = async () => {
        const response = await getGenders()
        setGenders(response.data.result)
        const infoPlatform = await getPlatforms()
        setPlatforms(infoPlatform.data.result)
    }
    useEffect(() => {
        getGendersAndPlatforms();
    }, [])

    return <div className='create-videogame'>
        <div className="titulo-create">
            <h4 >Crear nuevo Videogame</h4>
            <img className="loguito" src={logo}/>
            </div>
        
        <form className='formulario' onSubmit={(e) => handleSumbit(e)}>
            <label className="name-form"> Nombre: </label>
           
            <input className="input-form" type="text" name="name" value={newGame.name} onChange={handleChange} required/>
            <label className="name-form"> Descripción: </label>
            <textarea className="input-description" name="description" value={newGame.description} onChange={handleChange} required/>
            <label className="name-form"> Imagen: </label>
           
            <input className="input-form" type='url' name='image' value={newGame.image} onChange={handleChange} />
            <label className="name-form">Lanzamiento: </label>
        
            <input className="input-form" type="date" name='releasDate' value={newGame.releasDate} onChange={handleChange} />
           

            <label className="name-form">Plataformas: </label>
            <select className="input-form" id="platform" name="platform" onChange={(e) => handleSelect(e)}>
                {platforms.map(e => {
                    return <option key={e.name} value={e.name}>{e.name}</option>

                })}
            </select >
            <div className="container-platform-label">
            {newGame.platform.map(el => {
                return <div className="platform-Label">
                    <p>{el}</p>
                    <button className="delete-buton-label" name="platform" onClick={(e) => handleDelete(e,el)}>X</button>
                </div>
            })}
            </div>
            <label className="name-form">Géneros: </label>
            <select className="input-form" id="gender" name="gender" onChange={(e) => handleSelect(e)}>
                {genders.map(e => {
                    return <option key={e.name} value={e.name}>{e.name}</option>

                })}
            </select>
            <div className="container-platform-label">
            {newGame.gender.map(el => {
                return <div className="platform-Label">
                    <p>{el}</p>
                    <button className="delete-buton-label" name="gender" onClick={(e) => handleDelete(e,el)}>x</button>
                </div>
            })}
            </div>
            <label className="name-form2"> Rating: </label>
            <input className="input-form2" type="number" name='rating' value={newGame.rating} min={0} max={10} onChange={handleChange} />
            <button type="submit" className='btn-crear'>Crear Videogame</button>
            <Link to="/home"><button className='buton-atras'><h4>Atrás</h4></button></Link>
            <div className='detalle-container'></div>
        </form>

    </div>
}