import React, { useEffect, useRef, useState } from 'react'
import { ProgresBar, ProgrerLive} from '../ProgresBar/ProgresBar'
import "./pokeSpacio.css"

export function PokeEspacio({datos, poken, pokedexset}){
    const {exp, vida, lvl, poke} = datos[0]
    nPokedex(poke, pokedexset)
    const expe=exp.toString()
    const expArr=expe.split("")
    const barraExp=expArr[expArr.length-1];
    const srcImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poken}.png`
    return (
        <div className="general">
            <div className='pokeInfo'>
                <h1 className='white-color'>{poke}</h1>
                <h2 className = 'white-color' > Lvl: {(lvl === 0) ? "0" : lvl} </h2>
            </div>
                <img src={(poken === 0)? 'pngwing.com.png' : srcImg} alt=''/>
                <div className="pokeStats">
                    <h3 className = 'white-color' > Experience </h3>
                    <ProgresBar exp={barraExp}/>
                    <h3 className = 'white-color' > Lived </h3>
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
 