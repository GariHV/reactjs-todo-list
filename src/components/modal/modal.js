import React from 'react'
import "./modal.css"

export function Modal({func,children}){

    return(
        <div id="myModal" className="modal">

        <div className="modal-content">
            <div className="modal-header">
                <span aria-hidden="true" className="close" key="close" onClick={func} onKeyUp={func} >&times;</span>
                <h2>Modal Header</h2>
            </div>
            <div className="modal-body">
                {children}
            </div>
            <div className="modal-footer">
                <h3>Modal Footer</h3>
            </div>
        </div>
        </div>
        )
}