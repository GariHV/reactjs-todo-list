import React, { useEffect, useRef, useState } from 'react'
import { ProgresBar, ProgrerLive} from '../ProgresBar/ProgresBar'
import "./pokeSpacio.css"

export function PokeEspacio({datos}){
    const [nPoke,setnPokedex]=useState(0)
    const {exp, vida, lvl, poke} = datos[0]
    nPokedex(poke,setnPokedex)
    const expe=exp.toString()
    const expArr=expe.split("")
    const barraExp=expArr[expArr.length-1];
    const srcImg=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${nPoke}.png`
    return (
        <div className="general">
            <div className='pokeInfo'>
                <h1 className='white-color'>{poke}</h1>
                <h2 >{(lvl===0)? "":lvl}</h2>
            </div>
                <img src={srcImg} alt=''/>
                <div className="pokeStats">
                    <h3>Experience</h3>
                    <ProgresBar exp={barraExp}/>
                    <h3>Lived</h3>
                <ProgrerLive progress={vida} key="progres" />
                </div>
        </div>
    )
}


async function nPokedex(poke,setnPokedex){
    const data= await imgPoke()
        for (const pokemon of data) {
            if(pokemon.nombre===poke){
                const numero = Number( pokemon["nºPoke"])
                setnPokedex(numero)
            }
        }
 }

async function imgPoke() {
    const response=await fetch('pokemons.json')
    const data = await response.json()
    return data
}
 