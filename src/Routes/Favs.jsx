import React from "react";
import Card from "../Components/Card";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {Theme} = useContext(ContextGlobal)
  
  const [dentistFavourite, setDentistFavourite] = useState([])

  useEffect(() => {
    setDentistFavourite(JSON.parse(localStorage.getItem('favs')))
  }, [dentistFavourite])

  const handleClearFavs = (e) => {
    localStorage.clear()
  }

  return (
    <div div className="favs" style={{background:Theme.backgroundHome, color:Theme.color}}>
      <h1>Dentists Favs</h1>
      <button className="buttonRemove" onClick={handleClearFavs}>REMOVE ALL DENTIST</button>
      <div className="card-grid">
        {dentistFavourite?.map(info => <Card key={info.id} name={info.name} username={info.username} id={info.id}/>)}
      </div>
    </div>
  );
};


export default Favs;
