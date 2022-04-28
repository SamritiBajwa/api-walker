import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Planets = () => {
    const {id} = useParams()
    const [planets, setPlanet] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(res=>{
            console.log(res.data)
            setPlanet(res.data)
        })
        .catch(err=>console.log(err))
    },[id])

    return (
        <fieldset>
            <legend> Planet.jsx </legend>
            {
                planets?
                <div>
                    <h1> {planets.name} </h1>
                    <h4> Climate: {planets.climate}</h4>
                    <h4> Terrain: {planets.terrain}</h4>
                    <h4> Surface Water: {planets.surface_water}</h4>
                    <h4> Population: {planets.population}</h4>
                </div>:
                <h1> No such Planet. Please try different ID.</h1>
            }
            <h1> {} </h1>

        </fieldset>
    )
}

export default Planets