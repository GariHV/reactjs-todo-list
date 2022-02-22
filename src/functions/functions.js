import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export async function pokedex(){
    const response=await fetch('evolucines.json')
    const data = await response.json()
    return data
}

export function revisarLvl(state, setestado) {
    const expe = state["exp"].toString()
    const realLvl = expe.substring(0, expe.length - 1);
    if (state["lvl"] !== (realLvl) ? realLvl : "0") {
        toast.info('Tu Pokemon a subido de nivel', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setestado({
            type: "lvl",
            lvl: realLvl
        })
    }
}

export async function revisarPokemon(state, setestado, mostarModalHuevo, mostarModalEvolucion) {
    const nivelPokemon = parseInt(state["lvl"]);
    if (nivelPokemon === 1 && state["poke"] === "Huevo") {
        mostarModalHuevo()
        const npokemon = Math.floor(Math.random() * (67 - 1)) + 1;
        const poked = await pokedex()
        state["infoPoke"] = poked[npokemon]
        state["poke"] = state["infoPoke"][1]
        setestado({
            type: "Pokemon",
            estado: state
        })
    } else if (nivelPokemon > 1) {
        if (state["poke"] === state["infoPoke"]["1"]) {
            if (Object.keys(state["infoPoke"]).length > 2) {
                if (nivelPokemon >= state["infoPoke"]["lvl1"]) {
                    mostarModalEvolucion()
                    state["poke"] = state["infoPoke"]["2"]
                    setestado({
                        type: "Pokemon",
                        estado: state
                    })
                }
            }
        }
        if (state["poke"] === state["infoPoke"]["2"]) {
            if (Object.keys(state["infoPoke"]).length > 4) {
                if (nivelPokemon >= state["infoPoke"]["lvl2"]) {
                    mostarModalEvolucion()
                    state["poke"] = state["infoPoke"]["3"]
                    setestado({
                        type: "Pokemon",
                        estado: state
                    })
                }
            }
        }
    }
}


export function finDia(tasks, estado, dispatch, setestado, SetRevisarV, RevisarV) {
    const d = new Date()
    const hour = d.getHours()
    if (hour === 17) {
        for (const task of tasks) {
            if (task.done === false) {
                setestado({
                    type: 'noComplet',
                    payload: ""
                })
            } else {
                dispatch({
                    type: 'toggle',
                    payload: task.id
                })
            }
        }
        // eslint-disable-next-line no-unneeded-ternary
        SetRevisarV(!RevisarV ? true : false)
    }
}

export function muerte(estado, setestado, setnPokedex) {
    if (estado[0].vida < 1) {
        setestado({
            type: 'Huevo',
            payload: estado[0]
        })
       setnPokedex(0)
        toast.error('Tu Pokemon se devilito☠️', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } else if (estado[0].vida < 15) {
        toast.warn('Estas a punto de morir, vigila', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}

export function dif(data, mixChecked) {
    const {dificultad, done} = data
    switch(dificultad){
        case "facil":
        return (
        <div className='check' style={{backgroundColor: "green"}}>
            <input type="checkbox"  onChange={mixChecked} checked={done}/>
        </div>)

        case "intermedio":
        return (
        <div className='check' style={{backgroundColor: "yellow"}}>
            <input type = "checkbox"
            onChange = {mixChecked} checked={done}/>
        </div>)

        case "dificil":
        return (
        <div className='check' style={{backgroundColor: "red"}}>
            <input type="checkbox" onChange = {mixChecked}  checked={done}/>
        </div>)

        default:
            return (
        <div className='check' style={{backgroundColor: "grey"}}>
            <input type="checkbox"  value={done}/>
        </div>)
    }
}

export function cuandoEvoluciona(lvl,lvl1,lvl2){
    if(lvl2){
        console.log(lvl2);
        if(!isNaN(lvl2)){
            if(lvl>=lvl2){
                return "Maxima Evolucion"
            }
            if(lvl>=lvl1){
                return "Evoluciona al lvl:"+lvl2
            }
            return "Evoluciona al lvl:"+lvl1

        }
        if(lvl<=lvl1){
            return "Evoluciona al lvl:"+lvl1
        }
        return "Evoluciona con:" + lvl2
    }if(lvl1){
        if(!isNaN(lvl1)){
            if(lvl<=lvl1){
                return "Evoluciona al lvl:"+lvl1
            }
            return "Maxima evolucion"
        }
        return "Evoluciona con:" + lvl1
    }
    return "No evoluciona"
}

export async function nPokedex(poke,setnPokedex){
    const data= await imgPoke()
    for (const pokemon of data) {
        if(pokemon.nombre===poke){
                const numero = Number( pokemon["nºPoke"])
                setnPokedex(numero)
                return numero
            }
        }
    setnPokedex(0)
}

export async function imgPoke() {
    const response=await fetch('pokemons.json')
    const data = await response.json()
    return data
}
