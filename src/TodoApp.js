// librerias
import React, { useEffect, useReducer,useState, useRef } from 'react'
import { Switch, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';


import * as f from "./functions/functions"

// importacion diseño
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'

// funciones del useReduce
import { todoReducer } from './Reduces/todoReducer';
import { estadoReduce } from './Reduces/estadoReduce';

// componetes
import {Nav} from "./components/nav/nav"
import {PokeEspacio} from "./components/pokeEspacio/pokeEspacio"
import {ListaTasks} from "./components/listaTasks/listaTasks"
import { Task } from './components/task/task';
import {Modal} from "./components/modal/modal"
import Forms from './components/from/Forms';
import {BtnCrear} from "./components/btnCrear/btnCrear"
import {Tienda} from "./components/tienda/tienda"




const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}
const init2 = () => {
    return JSON.parse(localStorage.getItem('estado')) || [{"oro":0,"exp":0,"vida":100,"lvl":"0",poke:"Huevo","infoPoke":{}}]
}



export const TodoApp = () => {
    const refId = useRef(null);// sacar id al editar

    const [nPoke, setnPokedex] = useState(0)// numero de pokedex del pokemon
    const [Revisar, SetRevisar] = useState(false)// revisar lvl pokemon
    const [Revisar1, SetRevisar1] = useState(false)// revisar evoluciones/ecolsiones pokemons
    const [RevisarV, SetRevisarV] = useState(false)// revisar vida por si mueres
    const [ModalV,setModal]=useState(false)// estado modal form
    const [ModalHuevo,setModalHuevo]=useState(false)// estado modal eclosion
    const [ModalEvolucion,setModalEvolucion]=useState(false)// estado modal evolucion

    const [todos, dispatch] = useReducer(todoReducer, [], init); // comprobacion Todos
    const [estado, setestado] = useReducer(estadoReduce, [], init2); // comprobacion estado

    // funciones para abrir los modales
    const mostarModal=()=>{
        // eslint-disable-next-line no-unneeded-ternary
        setModal(!ModalV ? true : false)
    }
    const resetearModal =()=>{
        mostarModal()
        refId.current.innerText = 0;
    }
    const mostarModalHuevo=()=>{
        setModalHuevo(true)
        setTimeout(() => {
            setModalHuevo(false)
        }, 5000);
    }
    const mostarModalEvolucion=()=>{
        setModalEvolucion(true)
        setTimeout(() => {
            setModalEvolucion(false)
        }, 3000);
    }

 
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
    useEffect( () => {
        localStorage.setItem('estado', JSON.stringify(estado))
    }, [estado]);
    useEffect(() => {
        f.revisarLvl(estado[0], setestado)
        // eslint-disable-next-line no-unneeded-ternary
        SetRevisar1(!Revisar1 ? true : false)
    }, [Revisar])
    useEffect(() => {
        f.revisarPokemon(estado[0], setestado, mostarModalHuevo, mostarModalEvolucion)
    }, [Revisar1])
    useEffect(() => {
            f.muerte(estado, setestado, setnPokedex)
        }, [RevisarV]) 

   // funcion para crear las tasks
    const impTask=()=>{
    todos.sort(function(x, y) {
        return Number(x.done) - Number(y.done);
    })
    const to = todos.map( (todo) => (
        <Task 
        key={todo.id}
        checkIfChecked={checkIfChecked}
        data = {todo}
        funcDispatch = {dispatch}
        funcModal ={mostarModal}
        idRef = {refId}
        />
    ))
    return to
    }

        // funcion para evaluar el check
    function checkIfChecked(props) {
        const condition = {
            type: props,
            payload: estado[0]
        }
        setestado(condition)
        // eslint-disable-next-line no-unneeded-ternary
        SetRevisar(!Revisar ? true : false)
    }

    // funcion para crear/editar tasks
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
                <Tienda
                    estado = {estado}
                    todos = {todos}
                    setestado = {setestado}
                    dispatch = {dispatch}
                    setnPokedex={setnPokedex}
                    revisarLvl={f.revisarLvl}
                />
                </Route>
                <Route path='/'>
                <button type = 'button'
                onClick = {
                    () => f.finDia(todos, estado, dispatch, setestado, SetRevisarV, RevisarV)
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