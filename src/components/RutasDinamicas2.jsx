import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const RutasDinamicas2 = () => {
    const [equipo, SetEquipo] = useState ([])

useEffect (() => {
    const obtenerDatos = async () => {
        const data = await fetch (`https://jsonplaceholder.typicode.com/todos`)
        const users = await data.json()
        SetEquipo(users)
    }
    obtenerDatos()
}, [])

  return (
    <div>
        <h1>User</h1>
    <ul>
        {
            equipo.map(item => (
                <li key= {item.id}>
                <Link to= {`/users/${item.id}`}>
                    {item.title}
                    </Link>
                </li>
            ))
        }
    </ul>
    </div>
  )
}

export default RutasDinamicas2