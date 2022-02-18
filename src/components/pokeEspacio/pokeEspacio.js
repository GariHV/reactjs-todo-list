import React, { useRef } from 'react'
import { ProgresBar, ProgrerLive} from '../ProgresBar/ProgresBar'
import "./pokeSpacio.css"

export function PokeEspacio(){
    const experience = useRef(null);
    return (
        <div className="general">
            <div className='pokeInfo'>
                <h1 >Huevo</h1>
            </div>
                <img src="pngwing.com.png" alt=''/>
                <div className="pokeStats">
                    <h3>Experience</h3>
                    <ProgresBar exp={experience}/>
                    <h3>Lived</h3>
                <ProgrerLive progress="100" key="progres" />
                </div>
        </div>
    )
}