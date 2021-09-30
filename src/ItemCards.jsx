import React from "react";
import { Link } from 'react-router-dom';

export const ItemCards = (name,image,types,id) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={image} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{id} - {name}</h5>
                <ul className="card-text">{types.map(type=><li>{type.type.name}</li>)}</ul>
                <a to={`/heroe/${id}`} className ="btn btn-primary">leer más</a>
            </div>
        </div>
    )
}