import React from 'react'
import "./options.css"

export function Options({todo}){
    const handleDelete = () =>{
        console.log(todo.id);
    }
    return (
        <div className="optionsMenu">
            <button type='button' onClick={handleDelete}>borrar</button>
            <button type='button'>editar</button>
        </div>
    )
}