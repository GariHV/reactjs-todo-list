import React, { useEffect, useReducer,useState, useRef } from 'react'
import { Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Forms from './components/from/Forms';
import { Task } from './components/task/task';
import './styles.css'
import { todoReducer } from './Reduces/todoReducer';
import { estadoReduce } from './Reduces/estadoReduce';
import {ListaTasks} from "./components/listaTasks/listaTasks"
import {PokeEspacio} from "./components/pokeEspacio/pokeEspacio"
import {Modal} from "./components/modal/modal"
import {BtnCrear} from "./components/btnCrear/btnCrear"
import { ShopBackground } from './components/shopBackground/ShopBackground';
import {Nav} from "./components/nav/nav"
import { Producto} from "./components/productoTienda/producto"
import { SecionTienda} from "./components/secionTienda/secionTienda"
import 'react-toastify/dist/ReactToastify.css';
import { ComingSoon } from './components/ComingSoon/ComingSoon';




const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const init2 = () => {
    return JSON.parse(localStorage.getItem('estado')) || [{"oro":0,"exp":0,"vida":100,"lvl":"0",poke:"Huevo","infoPoke":{}}];
}



export const TodoApp = () => {
    const refId = useRef(null);
    const [nPoke, setnPokedex] = useState(0)
    const [Revisar, SetRevisar] = useState(false)
    const [Revisar1, SetRevisar1] = useState(false)
    const [RevisarV, SetRevisarV] = useState(false)
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [estado, setestado] = useReducer(estadoReduce, [], init2);

    const [ModalV,setModal]=useState(false)
    const mostarModal=()=>{
        // eslint-disable-next-line no-unneeded-ternary
        setModal(!ModalV ? true : false)
    }
    const [ModalHuevo,setModalHuevo]=useState(false)
    const mostarModalHuevo=()=>{
        // eslint-disable-next-line no-unneeded-ternary
        setModalHuevo(true)
        setTimeout(() => {
            setModalHuevo(false)
        }, 5000);
    }
    const [ModalEvolucion,setModalEvolucion]=useState(false)
    const mostarModalEvolucion=()=>{
        // eslint-disable-next-line no-unneeded-ternary
        setModalEvolucion(true)
        setTimeout(() => {
            setModalEvolucion(false)
        }, 3000);
    }
    const resetearModal =()=>{
        mostarModal()
        refId.current.innerText = 0;
    }
    const impTask=()=>{
        todos.sort(function(x, y) {
            return Number(x.done) - Number(y.done);
        })

        const to = todos.map( (todo) => (
            <Task key={todo.id}
            revisarLvl={revisarLvl}
            checkIfChecked={checkIfChecked}
            data = {todo}
            datos = {estado}
            estadoActual = {setestado}
            funcDispatch = {dispatch}
            funcModal ={mostarModal}
            idRef = {refId}
            huevoModal = {mostarModalHuevo}
            evolucionModal ={setModalEvolucion}
            />
        ))
        
        
        // console.log(to)
        return to
    }

    function checkIfChecked(props) {
        const condition = {
            type: props,
            payload: estado[0]
        }
        setestado(condition)
        // eslint-disable-next-line no-unneeded-ternary
        SetRevisar(!Revisar ? true : false)
    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
    useEffect( () => {
        localStorage.setItem('estado', JSON.stringify(estado))
    }, [estado]);
    useEffect(() => {
        revisarLvl(estado[0], setestado)
        // eslint-disable-next-line no-unneeded-ternary
        SetRevisar1(!Revisar1 ? true : false)
    }, [Revisar])
    useEffect(() => {
        revisarPokemon(estado[0], setestado, mostarModalHuevo, mostarModalEvolucion)
    }, [Revisar1])
    useEffect(() => {
            muerte(estado, setestado, setnPokedex)
        }, [RevisarV]) 
        const handleSubmit = (e) => {
        const {name, lastname, chancho, radio,edit} = e;
        if(edit===0){  
            const newTodo = {
                id: new Date().getTime(),
                title: name,
                description: lastname,
                dificultad: chancho,
                repeticion: radio,
                done: false
            }
            const añadirTodo = {
                type:'add',
                payload: newTodo
            }
            dispatch( añadirTodo )
            resetearModal()
        }else {
            const newTodo = {
                id: edit,
                title: name,
                description: lastname,
                dificultad: chancho,
                repeticion: radio,
                done: false
            }
            const editarTodo = {
                type:'edit',
                payload: newTodo
            }
            dispatch( editarTodo )
            resetearModal()
        }
        // reset();
    }
    
    return (
        <div >

            <Nav datos = {estado} />
            <PokeEspacio datos = {estado} poken={nPoke} pokedexset={setnPokedex}/>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        />
                        {/* Same as */}
                    <ToastContainer />
            <Switch>
                <Route path='/tienda'>
                        <ShopBackground/>
                        <SecionTienda titulo="objetos">
                            <Producto img="1001469812.jpeg"
                                    nombrePro="Poción Vida"
                                    precio="10"
                                    datos = {estado}
                                    data = {todos}
                                    estadoActual = {setestado}
                                    funcDispatch = {dispatch}
                                    poken = {nPoke}
                                    pokedexset={setnPokedex}
                                    lvlcheck={revisarLvl}
                                    />
                            <Producto img="1001469815.jpeg"
                                    nombrePro="Poción Exp"
                                    precio="5"
                                    datos = {estado}
                                    data = {todos}
                                    estadoActual = {setestado}
                                    funcDispatch = {dispatch}
                                    poken = {nPoke}
                                    pokedexset={setnPokedex}
                                    lvlcheck={revisarLvl}/>
                            <Producto img="1001469813.jpeg"
                                    nombrePro="Día descanso"
                                    precio="15"
                                    datos = {estado}
                                    data = {todos}
                                    estadoActual = {setestado}
                                    funcDispatch = {dispatch}
                                    poken = {nPoke}
                                    pokedexset={setnPokedex}
                                    lvlcheck={revisarLvl}/>
                            <Producto img="pngwing.com.png"
                                    nombrePro="Huevo"
                                    precio="30" 
                                    datos = {estado}
                                    data = {todos}
                                    estadoActual = {setestado}
                                    funcDispatch = {dispatch}
                                    poken = {nPoke}
                                    pokedexset={setnPokedex}
                                    lvlcheck={revisarLvl}/>
                        </SecionTienda>
                        <SecionTienda titulo="Piedras">
                            <Producto img='thunder-stone.png' datos = {estado} estadoActual = {setestado} data = {todos}/>
                            <Producto datos = {estado} estadoActual = {setestado} data = {todos}/>
                            <Producto datos = {estado} estadoActual = {setestado} data = {todos}/>
                            <Producto datos = {estado} estadoActual = {setestado} data = {todos}/>
                            <ComingSoon />
                        </SecionTienda>
                </Route>
                <Route path='/'>
                <button type = 'button'
                onClick = {
                    () => finDia(todos, estado, dispatch, setestado, SetRevisarV, RevisarV)
                } > Reinicio </button>
                    <div ref={refId} hidden>0</div>
                    <div className='app'>
                        <div className='generalTodo'>
                            <ListaTasks
                            nTask={todos.length}
                            titulo="Tareas diarias">
                                {
                                    impTask()
                                }
                            </ListaTasks>
                        </div>
                        <BtnCrear  func={mostarModal}/>
                        {ModalV ?
                            <Modal func ={mostarModal}>
                                    <Forms
                                    onSubmit={handleSubmit}
                                    id = {refId.current.innerHTML}
                                    data = {todos}
                                    />
                            </Modal>
                            :null}
                        {ModalHuevo ?
                            <Modal func={mostarModalHuevo}>
                                <img className='huevo-gif' src='SodH.gif' alt=''></img>
                            </Modal>
                            :null}
                        {ModalEvolucion ?
                            <Modal func={mostarModalEvolucion}>
                                <img className='huevo-gif' src='evolucion.gif' alt=''></img>
                            </Modal>
                            :null}
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

async function pokedex(){
    const response=await fetch('evolucines.json')
    const data = await response.json()
    return data
}

export function revisarLvl(state, setestado) {
    const expe = state["exp"].toString()
    const realLvl = expe.substring(0, expe.length - 1);
    if (state["lvl"] !== (realLvl) ? realLvl : "0") {
        setestado({
            type: "lvl",
            lvl: realLvl
        })
    }
}

async function revisarPokemon(state, setestado, mostarModalHuevo, mostarModalEvolucion) {
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


function finDia(tasks, estado, dispatch, setestado, SetRevisarV, RevisarV) {
    const d = new Date()
    const hour = d.getHours()
    if (hour === 13) {
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

function muerte(estado, setestado, setnPokedex) {
    if (estado[0].vida < 1) {
        setestado({
            type: 'Huevo',
            payload: estado
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