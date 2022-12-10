import React from 'react'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

export const urlDentists = 'https://jsonplaceholder.typicode.com/users'

const Home = () => {

  const [dentists, setDentists] = useState([])

  const { Theme } = useContext(ContextGlobal);

  useEffect(() => {
    axios.get(urlDentists)
    .then(res => setDentists(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
      <div className='home' style={{background:Theme?.backgroundHome, color:Theme?.color}}>
          <h1>Home</h1>
          <div className='card-grid'>
              {dentists.map(dentist => {
                  return <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
              })}
          </div>
      </div>
  )
}

export default Home