
import React from 'react'
import { useState } from "react"
import "./task.css"
import {Options} from "../Options/options"

function dif(data, handleToggle) {
    const {dificultad, done} = data
    switch(dificultad){
        case "facil":
        return (
        <div className='check' style={{backgroundColor: "green"}}>
            <input type="checkbox"  onChange={handleToggle} value={done}/>
        </div>)

        case "intermedio":
        return (
        <div className='check' style={{backgroundColor: "yellow"}}>
            < input type = "checkbox"
            onChange = {handleToggle} checked={done}/>
        </div>)

        case "dificil":
        return (
        <div className='check' style={{backgroundColor: "red"}}>
            <input type="checkbox"  value={done}/>
        </div>)

        default:
            return (
        <div className='check' style={{backgroundColor: "grey"}}>
            <input type="checkbox"  value={done}/>
        </div>)
    }
}

export function Task({data, funcDispatch, mostarModal}){
    const [OptionsV,setOptions]=useState(false)
    const mostrarOptions=()=>{
        // eslint-disable-next-line no-unneeded-ternary
        setOptions(!OptionsV ? true : false )
    }

    const handleToggle = () => {
        funcDispatch({
            type: 'toggle',
            payload: data.id
        })
    }
    return(
            <li
                key= {data.id}
                className='lista'
            >
            {
                dif(data, handleToggle)
            }
            <div className='textTask'>
                <h2 className='text-center'> {data.title}</h2>
                <p className='text-center'> {data.description}</p>
            </div>
            <div/>
            <div>
                    {/* slint-disable-next-line no-unneeded-ternary */}
                <button type='button' onClick={mostrarOptions}  className='btnOptions'>...</button>
                {OptionsV ?
            <Options  
            todo = {data}
            dispatchFunc = {funcDispatch}
            modalFunc={mostarModal}
            />
            :null}
            </div>
            </li>
    )
}