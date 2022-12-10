import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import {useContext} from 'react';

const Card = ({ name, username, id }) => {
    const {Favs,setFavs} = useContext(ContextGlobal)

    // Aqui iria la logica para agregar la Card en el localStorage
    const addFavorites = () => {
        let isCreated = false  
        Favs.forEach((e,index) => {
            if (e.id === id) { 
                isCreated = true
                //me parecio una buena idea agregar la funcionalidad 
                //de que si un odontologo esta en favoritos
                //y es clickeado de nuevo se elimina de favoritos.
                Favs.splice(index,1)  
        }
    })
    if (isCreated === false) { 
        Favs.push({ 
            "name":name,
            "username":username,
            "id":id
        })
        localStorage.setItem("favs", JSON.stringify(Favs)) 
        alert("Dentist added successfully ")
    } else {
        localStorage.setItem("favs", JSON.stringify(Favs))
        alert("Dentist removed from favorites")
    }
    setFavs(Favs)
    }

    return (
        //agrego funcionalidad de cuando se toca el nombre del odontologo va al detalle 
    <div className="card">
        <img src="/images/doctor.jpg" alt="Doctor" />
        <h2><Link to={`/dentist/${id}`}>{name}</Link></h2>
        <h3>{username}</h3>
        <button onClick={addFavorites} className="favoriteButton">⭐</button>
    </div>
    );
};

export default Card;