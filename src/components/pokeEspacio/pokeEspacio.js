import React, { useRef } from 'react'
import { ProgresBar, ProgrerLive} from '../ProgresBar/ProgresBar'
import "./pokeSpacio.css"

export function PokeEspacio({datos}){
    const {exp, vida, lvl, poke} = datos[0]
    const expe=exp.toString()
    const expArr=expe.split("")
    const barraExp=expArr[expArr.length-1];
    const estado = JSON.parse(localStorage.getItem('estado'))[0]
    return (
        <div className="general">
            <div className='pokeInfo'>
                <h1 className='white-color'>{poke}</h1>
                <h2 >{(lvl===0)? "":lvl}</h2>
            </div>
                < img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
                alt = '' / >
                <div className="pokeStats">
                    <h3>Experience</h3>
                    <ProgresBar exp={barraExp}/>
                    <h3>Lived</h3>
                <ProgrerLive progress={vida} key="progres" />
                </div>
        </div>
    )
}