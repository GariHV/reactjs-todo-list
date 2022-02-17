import React from 'react'
import "./options.css"

export function Options({todo, dispatchFunc}){
    const {id} = todo
    const handleDelete = () =>{
        const action = {
            type: 'delete',
            payload: {id}
        }
        dispatchFunc(action);
    }
    return (
        <div className="optionsMenu">
            <button type='button' onClick={handleDelete}>borrar</button>
            <button type='button'>editar</button>
        </div>
    )
}