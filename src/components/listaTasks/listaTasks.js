import "./listaTasks.css"
import React from 'react'




export function ListaTasks({children,titulo, nTask}){
    return(
            <div className="cuerpo">
                <div className="cabezera">
                    <h1>{titulo}({nTask})</h1>
                    <div>
                        <button type='button'>todos</button>
                        <button type='button'>por Hacer</button>
                        <button type='button'>Hechos</button>
                    </div>
                </div>
                <div className="conasks">
                    <ul>
                        {children}
                    </ul>
                </div>
            </div>
    )
}