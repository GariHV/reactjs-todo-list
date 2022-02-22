
import React from 'react'
import { ProgresBar, ProgrerLive} from '../ProgresBar/ProgresBar'
import "./pokeSpacio.scss"
import * as f from "../../functions/functions"

export function PokeEspacio({datos, poken, pokedexset}){
    const {exp, vida, lvl, poke,infoPoke} = datos[0]
    const {lvl1,lvl2} = infoPoke
    f.nPokedex(poke, pokedexset)
    const expe=exp.toString()
    const expArr=expe.split("")
    const barraExp=expArr[expArr.length-1];
    const srcImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poken}.png`
    return (
        <div className="general">
            <div className='pokeInfo'>
                <h1 className='white-color'>{poke}</h1>
                <h2 className = 'white-color' > Lvl: {(lvl === 0) ? "0" : lvl} </h2>
                <h3 className = 'white-color'>{f.cuandoEvoluciona(lvl,lvl1,lvl2)}</h3>
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
