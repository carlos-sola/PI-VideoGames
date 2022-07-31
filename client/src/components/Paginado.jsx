import React from 'react';
import './Paginado.css'


export default function Paginado ({videogamePerPage, showVideogames,paginado}){
    const pageNumber=[]

    for(let i=0;i<=Math.ceil(showVideogames/videogamePerPage);i++){
        pageNumber.push(i)
    }
    return(
        <nav>
            <ul className='paginado'>
                {pageNumber &&
                pageNumber.map(number=>(
                    <li className='number'>
                        <a onClick={()=>paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}