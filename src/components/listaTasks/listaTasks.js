import { Children } from "react";
import "./listaTasks.css"




export function ListaTasks({children}){
    console.log(children);
    return(
            <div className="cuerpo">
            <div className="cabezera">
                <h1>titulo</h1>
                <div>
                    <button>todos</button>
                    <button>por Hacer</button>
                    <button>Hechos</button>
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