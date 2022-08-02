import './Create.css'
import React, { useEffect, useState } from 'react';
import { createVideogame, getGenders, getPlatforms } from '../../redux/actions';
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

export default function CreateNewVideogame() {
    const dispatch = useDispatch()
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
        console.log(e.target.value)
    }
    function handleSelect(e) {
        setNewGame({
            ...newGame,
            [e.target.name]: [...newGame[e.target.name], e.target.value]
        })
        console.log(e.target.name)
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

    return <div className='create-videogame'><h4 className="titulo-create">Crear nuevo Videogame</h4>
        <form className='formulario' onSubmit={(e) => handleSumbit(e)}>
            <label> Nombre: </label>
            <input type="text" name="name" value={newGame.name} onChange={handleChange} required/>
            <br />
            <label> Descripción: </label>
            <textarea name="description" value={newGame.description} onChange={handleChange} required/>
            <br />
            <label> Imagen: </label>
            <input type='url' name='image' value={newGame.image} onChange={handleChange} />
            <br />
            <label>Lanzamiento: </label>
            <input type="date" name='releasDate' value={newGame.releasDate} onChange={handleChange} />
            <br />

            <label>Plataformas: </label>
            <select id="platform" name="platform" onChange={(e) => handleSelect(e)}>
                {platforms.map(e => {
                    return <option key={e.name} value={e.name}>{e.name}</option>

                })}
            </select>
            <ul><li>{newGame.platform.map(el => {
                return <div>
                    <p>{el}</p>
                    <button name="platform" onClick={(e) => handleDelete(e,el)}>x</button>
                </div>
            })}</li></ul>

            <br />
            <label>Géneros: </label>
            <select id="gender" name="gender" onChange={(e) => handleSelect(e)}>
                {genders.map(e => {
                    return <option key={e.name} value={e.name}>{e.name}</option>

                })}
            </select>
            <ul><li>{newGame.gender.map(el => {
                return <div>
                    <p>{el}</p>
                    <button name="gender" onClick={(e) => handleDelete(e,el)}>x</button>
                </div>
            })}</li></ul>


            <br />
            <label> Rating: </label>
            <input type="number" name='rating' value={newGame.rating} min={0} max={10} onChange={handleChange} />
            <br />
            <button type="submit" className='btn-crear'>Crear Videogame</button>
            <Link to="/home"><button className='buton-atras'><h4>Atrás</h4></button></Link>
            <div className='detalle-container'></div>
        </form>

    </div>
}