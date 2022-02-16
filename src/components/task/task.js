
import React from 'react'
import { useState } from "react"
import "./task.css"
import {Options} from "../Options/options"



export function Task({data}){
    console.log(data);
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
            <div className='check' >
                <input type="checkbox"  />
            </div>
            <div className='textTask'>
                <h2 className='text-center'> {data.title}</h2>
                <p className='text-center'> {data.description}</p>
            </div>
            <div/>
            <div>
                <button type='button'  onClick={modtrarOptions}   className='btnOptions'>...</button>
                {OptionsV ?
            <Options />
            :null}
            </div>
            </li>
    )
}