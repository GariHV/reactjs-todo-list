
import React from 'react'
import { useState } from "react"
import "./task.css"
import {Options} from "../Options/options"

function dif(dificultad){
    switch(dificultad){
        case "facil":
        return (
        <div className='check' style={{backgroundColor: "green"}}>
            <input type="checkbox"  />
        </div>)

        case "intermedio":
        return (
        <div className='check' style={{backgroundColor: "yellow"}}>
            <input type="checkbox"  />
        </div>)

        case "dificil":
        return (
        <div className='check' style={{backgroundColor: "red"}}>
            <input type="checkbox"  />
        </div>)

        default:
            return (
        <div className='check' style={{backgroundColor: "grey"}}>
            <input type="checkbox"  />
        </div>)
    }
}

export function Task({data}){
    const [OptionsV,setOptions]=useState(false)
    const modtrarOptions=()=>{
        // eslint-disable-next-line no-unneeded-ternary
        setOptions(!OptionsV ? true : false )
    }
    return(
            <li
                key= {data.id}
                className='lista'
            >
            {
                dif(data.dificultad)
            }
            <div className='textTask'>
                <h2 className='text-center'> {data.title}</h2>
                <p className='text-center'> {data.description}</p>
            </div>
            <div/>
            <div>
                <button type='button' onClick={modtrarOptions}  className='btnOptions'>...</button>
                {OptionsV ?
            <Options  
            todo = {data}
            />
            :null}
            </div>
            </li>
    )
}