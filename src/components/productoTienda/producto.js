import "./Producto.css"

export function Producto({img,nombrePro,precio, datos, estadoActual, funcDispatch, data, poken, pokedexset, lvlcheck}){
    return(
        <div className="producto" onClick={()=>{buy(datos, estadoActual, precio, nombrePro, funcDispatch, data, poken, pokedexset, lvlcheck)}}>
            <img src={img} alt="objeto Tienda"/>
            <p>{nombrePro}</p>
            <div>
                <img src="coin2.png" alt="Oro"/>
                <p>{precio}</p>
            </div>
        </div>
    )
}


function buy(datos, estadoActual, precio, nombrePro, funcDispatch, data, poken, pokedexset, lvlcheck) {
    const {oro} = datos[0]
    const condition =  {
        type: nombrePro,
        payload: datos[0]
    }
    if(oro>=precio){
        if(nombrePro ===  'Día descanso'){
            for (const task of data) {
                if (task.done === false) {
                    estadoActual({
                        type: 'Día descanso',
                        payload: ""
                    })
                    funcDispatch({
                        type: 'toggle',
                        payload: task.id
                    })
                } else {
                    estadoActual({
                        type: 'Día descanso',
                        payload: ""
                    })
                }
            }
        }else if(nombrePro === 'Huevo'){
            estadoActual(condition)
            pokedexset(0)

        } else if (nombrePro === 'Poción Exp'){
            lvlcheck(datos[0], estadoActual)
            estadoActual(condition)

        } else{
            estadoActual(condition)
            
        }
    }
}