import "./Producto.css"

export function Producto({img,nombrePro,precio}){
    return(
        <div className="producto">
            <img src={img} alt="objeto Tienda"/>
            <p>{nombrePro}</p>
            <div>
                <img src="coin2.png" alt="Oro"/>
                <p>{precio}</p>
            </div>
        </div>
    )
}
