import React from 'react'
import "./btnCrear.scss"



export function BtnCrear({func,...props}){

    return(
            <button type='button' className="btnCreate" onClick={func}  {...props}><p> + </p></button>
    )
}