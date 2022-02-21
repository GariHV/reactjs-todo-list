import "./SecionTienda.css"


export function SecionTienda({children,titulo}){
    return(
        <div className="SecionTienda">
            <h2>{titulo}</h2>
            <hr/>
            <div>{children}</div>
        </div>
    )
}