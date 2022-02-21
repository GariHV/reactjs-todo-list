import React from 'react'
import "./modal.scss"

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