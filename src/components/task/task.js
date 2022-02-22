
import { useState } from "react"
import "./task.scss"
import {Options} from "../Options/options"
import {dif} from "../../functions/functions"



export function Task({data, funcDispatch, funcModal, idRef,checkIfChecked}){
    const [OptionsV,setOptions]=useState(false)
    const mostrarOptions=()=>{
        // eslint-disable-next-line no-unneeded-ternary
        setOptions(!OptionsV ? true : false )
    }

    function handleToggle () {
        funcDispatch({
            type: 'toggle',
            payload: data.id
        })
    }
    const mixChecked = () => {
        handleToggle();
        checkIfChecked(`${data.dificultad}-${!data.done}`);
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