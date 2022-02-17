import React from 'react'
import "./options.css"

export function Options({todo}){
    const {id} = todo
    const handleDelete = () =>{
        const action = {
            type: 'delete',
            payload: {id}
        }
        dispatch(action);
    }
    return (
        <div className="optionsMenu">
            <button type='button' onClick={handleDelete}>borrar</button>
            <button type='button'>editar</button>
        </div>
    )
}