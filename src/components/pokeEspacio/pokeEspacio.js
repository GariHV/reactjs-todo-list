import React, { useRef } from 'react'
import { ProgresBar, ProgrerLive} from '../ProgresBar/ProgresBar'
import "./pokeSpacio.css"

export function PokeEspacio({datos}){
    console.log(datos);
    console.log(datos[0]);
    const {exp, oro, vida, lvl, poke} = datos[0]
    console.log(exp);
    const estado = JSON.parse(localStorage.getItem('estado'))[0]
    return (
        <div className="general">
            <div className='pokeInfo'>
                <h1 >{poke}</h1>
                <h2 >{(lvl===0)? "":lvl}</h2>
            </div>
                <img src="pngwing.com.png" alt=''/>
                <div className="pokeStats">
                    <h3>Experience</h3>
                    <ProgresBar exp={exp}/>
                    <h3>Lived</h3>
                <ProgrerLive progress={vida} key="progres" />
                </div>
        </div>
    )
}