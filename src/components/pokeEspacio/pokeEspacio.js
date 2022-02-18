import React, { useRef } from 'react'
import { ProgresBar, ProgrerLive} from '../ProgresBar/ProgresBar'
import "./pokeSpacio.css"

export function PokeEspacio(){
    const estado = JSON.parse(localStorage.getItem('estado'))
    return (
        <div className="general">
            <div className='pokeInfo'>
                <h1 >{estado["poke"]}</h1>
                <h2 >{(estado["lvl"]===0)? "":estado["lvl"]}</h2>
            </div>
                <img src="pngwing.com.png" alt=''/>
                <div className="pokeStats">
                    <h3>Experience</h3>
                    <ProgresBar exp={estado["exp"]}/>
                    <h3>Lived</h3>
                <ProgrerLive progress={estado["vida"]} key="progres" />
                </div>
        </div>
    )
}