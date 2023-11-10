import React, { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"

const RutasDinamicas  = () => {

    const { id } = useParams ()
const [equipo, SetEquipo] = useState ([])

useEffect (() => {
    const obtenerDatos = async () => {
        const data = await fetch (`https://jsonplaceholder.typicode.com/todos/${id}`)
        const users = await data.json()
        SetEquipo(users)
    }
    obtenerDatos()
}, [id])


return (
    <div>
        <h1> Users </h1>
        <h3>{equipo.title}</h3>
        <p>{equipo.id}</p>
    </div>
    )
}

export default RutasDinamicas