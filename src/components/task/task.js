
import { useState } from "react"
import "./task.scss"
import {Options} from "../Options/options"


function dif(data, mixChecked) {
    const {dificultad, done} = data
    switch(dificultad){
        case "facil":
        return (
        <div className='check' style={{backgroundColor: "green"}}>
            <input type="checkbox"  onChange={mixChecked} checked={done}/>
        </div>)

        case "intermedio":
        return (
        <div className='check' style={{backgroundColor: "yellow"}}>
            <input type = "checkbox"
            onChange = {mixChecked} checked={done}/>
        </div>)

        case "dificil":
        return (
        <div className='check' style={{backgroundColor: "red"}}>
            <input type="checkbox" onChange = {mixChecked}  checked={done}/>
        </div>)

        default:
            return (
        <div className='check' style={{backgroundColor: "grey"}}>
            <input type="checkbox"  value={done}/>
        </div>)
    }
}

export function Task({data, funcDispatch, funcModal, idRef, estadoActual, datos,revisarLvl}){
    const [OptionsV,setOptions]=useState(false)
    const mostrarOptions=()=>{
        // eslint-disable-next-line no-unneeded-ternary
        setOptions(!OptionsV ? true : false )
    }

    function checkIfChecked  ()  {
        const condition =  {
            type: `${data.dificultad}-${!data.done}`,
            payload: datos[0]
        }
        estadoActual(condition)
        revisarLvl(datos[0],estadoActual)
    }

    function handleToggle () {
        funcDispatch({
            type: 'toggle',
            payload: data.id
        })
    }
    const mixChecked = () => {
        handleToggle();
        checkIfChecked();
    }

    return(
        <>
            <li
                key= {data.id}
                className='lista'
            >
            {
                dif(data, mixChecked)
            }
            <div className='textTask'>
                <h2 className='text-center'> {data.title}</h2>
                <p className='text-center'> {data.description}</p>
            </div>
            <div/>
            <div>
                    {/* slint-disable-next-line no-unneeded-ternary */}
                <button type='button' onClick={mostrarOptions}  className='btnOptions'>...</button>
            </div>
            </li>
                {OptionsV ?
            <Options  
            todo = {data}
            dispatchFunc = {funcDispatch}
            modalFunc={funcModal}
            refId = {idRef}
            />
            :null}
        </>
    )
}