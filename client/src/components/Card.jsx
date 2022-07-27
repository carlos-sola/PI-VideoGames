import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Card ({id,name,rating,gender,image}) {
    return <div>
        <img src={image}/>
           
        </div>
}