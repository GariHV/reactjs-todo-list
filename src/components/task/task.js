
import { useState } from "react"
import "./task.css"
import {Options} from "../Options/options"



export function Task({todo}){
    const [OptionsV,setOptions]=useState(false)
    const modtrarOptions=()=>{
        setOptions(!OptionsV ? true : false )
    }
    return(
            <li
                key= {todo.id}
                className='lista'
            >
            <div className='check' >
                <input type="checkbox"  />
            </div>
            <div className='textTask'>
                <h2 className='text-center'> {todo.title}</h2>
                <p className='text-center'> {todo.desc}</p>
            </div>
            <div></div>
            <div>
                <button type='button'  onClick={modtrarOptions}   className='btnOptions'>...</button>
                {OptionsV ?
            <Options />
            :null}
            </div>
            </li>
    )
}