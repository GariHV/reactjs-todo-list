import React from 'react'
import "./options.scss"

export function Options({todo, dispatchFunc, modalFunc, refId}){
    const {id} = todo 
    function editMix(){
        console.log(id);

        
        modalFunc()
        refId.current.innerText = id;
    }
    const handleDelete = () =>{
        const action = {
            type: 'delete',
            payload: id
        }
        dispatchFunc(action);
    }
    return (
        <div className="optionsMenu">
            <button type='button' onClick={handleDelete}>borrar</button>
            <button type='button' onClick={editMix}>editar</button>
        </div>
    )

}