import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

    const { Theme } = useContext(ContextGlobal)
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const params = useParams()
    const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
    const [dentistDetail, setDentistDetail] = useState({})

    useEffect(() => {
        axios.get(url)
        .then(res => setDentistDetail(res.data))
        .catch(err => console.log(err))
    })

    return (
        <div className='detail' style={{background:Theme.backgroundHome, color:Theme.color}}>
            <h1>Detail Dentist {dentistDetail.id} </h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{dentistDetail.name}</td>
                        <td>{dentistDetail.email}</td>
                        <td>{dentistDetail.phone}</td>
                        <td>{dentistDetail.website}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Detail