import "./listaTasks.css"
import React, { useState } from 'react'




export function ListaTasks({children,titulo, nTask}){
    const [valor, cambioValor] = useState(0)
    console.log(valor);
    function taskDisplay(){
        switch (valor) {
            case 0:
                return children
                
            case 1:
                return children.filter(child => child.props.data.done === false)
            case 2:
                return children.filter(child => child.props.data.done === true)
            default:
                return children
        }
    }
    return(
            <div className="cuerpo">
                <div className="cabezera">
                    <h1>{titulo}({nTask})</h1>
                    <div>
                        <button className = {(valor === 0) ? "marcado" : ""}
                        type = 'button'
                        onClick = {() => cambioValor(0)} > todos </button>
                        <button className = {
                            (valor === 1) ? "marcado" : ""
                        }
                        type = 'button'
                        onClick = {
                            () => cambioValor(1)
                        }> por Hacer </button>
                        <button className = {
                            (valor === 2) ? "marcado" : ""
                        }
                        type = 'button'
                        onClick = {
                            () => cambioValor(2)
                        }> Hechos </button>
                    </div>
                </div>
                <div className="conasks">
                    <ul>
                        {
                            taskDisplay()
                        }
                    </ul>
                </div>
            </div>
    )
}