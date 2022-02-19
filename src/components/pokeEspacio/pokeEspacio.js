import React, { useRef } from 'react'
import { ProgresBar, ProgrerLive} from '../ProgresBar/ProgresBar'
import "./pokeSpacio.css"

export function PokeEspacio(){
    const estado = JSON.parse(localStorage.getItem('estado'))[0]
    return (
        <div className="general">
            <div className='pokeInfo'>
                <h1 >{estado["poke"]}</h1>
                <h2 >{(estado["lvl"]===0)? "":estado["lvl"]}</h2>
            </div>
                <img src="pngwing.com.png" alt=''/>
                <div className="pokeStats">
                    <h3>Experience</h3>
                    <ProgresBar exp={6}/>
                    <h3>Lived</h3>
                <ProgrerLive progress={80} key="progres" />
                </div>
        </div>
    )
}