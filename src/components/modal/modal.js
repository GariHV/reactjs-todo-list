import React from 'react'
import "./modal.css"

export function Modal({func,children}){

    return(
        <div id="myModal" className="modal">

        <div className="modal-content">
            <div className="modal-body">
                {children}
            </div>
        </div>
        </div>
        )
}