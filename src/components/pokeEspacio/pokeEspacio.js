import React from 'react'
import { ProgresBar, ProgrerLive} from '../ProgresBar/ProgresBar'
import "./pokeSpacio.css"

export function PokeEspacio(){
    return (
        <div className="general">
            <div className='pokeInfo'>
                <h1>Huevo</h1>
            </div>
                <img src="pngwing.com.png" alt=''/>
                <div className="pokeStats">
                    <h3>Experience</h3>
                    <ProgresBar />
                    <h3>Lived</h3>
                <ProgrerLive progress="90" key="progres" />
                </div>
        </div>
    )
}