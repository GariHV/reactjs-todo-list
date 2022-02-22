import { ShopBackground } from '../shopBackground/ShopBackground';
import { Producto} from "../productoTienda/producto"
import { SecionTienda} from "../secionTienda/secionTienda"
import { ComingSoon } from '../ComingSoon/ComingSoon';

export function Tienda({estado,todos,setestado,dispatch,setnPokedex,revisarLvl}){
    return(
        <>
        <ShopBackground/>
        <SecionTienda titulo="objetos">
            <Producto 
                    img="1001469812.jpeg"
                    nombrePro="Poción Vida"
                    precio="10"
                    datos = {estado}
                    data = {todos}
                    estadoActual = {setestado}
                    funcDispatch = {dispatch}
                    pokedexset={setnPokedex}
                    lvlcheck={revisarLvl}
                    />
            <Producto img="1001469815.jpeg"
                    nombrePro="Poción Exp"
                    precio="5"
                    datos = {estado}
                    data = {todos}
                    estadoActual = {setestado}
                    funcDispatch = {dispatch}
                    pokedexset={setnPokedex}
                    lvlcheck={revisarLvl}/>
            <Producto img="1001469813.jpeg"
                    nombrePro="Día descanso"
                    precio="15"
                    datos = {estado}
                    data = {todos}
                    estadoActual = {setestado}
                    funcDispatch = {dispatch}
                    pokedexset={setnPokedex}
                    lvlcheck={revisarLvl}/>
            <Producto img="pngwing.com.png"
                    nombrePro="Huevo"
                    precio="30" 
                    datos = {estado}
                    data = {todos}
                    estadoActual = {setestado}
                    funcDispatch = {dispatch}
                    pokedexset={setnPokedex}
                    lvlcheck={revisarLvl}/>
        </SecionTienda>
        <SecionTienda titulo="Piedras">
            <Producto img='thunder-stone.png' datos = {estado} estadoActual = {setestado} data = {todos}/>
            <Producto datos = {estado} estadoActual = {setestado} data = {todos}/>
            <Producto datos = {estado} estadoActual = {setestado} data = {todos}/>
            <Producto datos = {estado} estadoActual = {setestado} data = {todos}/>
            <ComingSoon />
        </SecionTienda>
    </>
    )
}