import React, { useEffect, useReducer,useState, useRef } from 'react'
import { Switch, Route } from 'react-router-dom';
import Forms from './components/Forms';
import { Task } from './components/task/task';
import './styles.css'
import { todoReducer } from './todoReducer';
import { estadoReduce } from './estadoReduce';
import {ListaTasks} from "./components/listaTasks/listaTasks"
import {PokeEspacio} from "./components/pokeEspacio/pokeEspacio"
import {Modal} from "./components/modal/modal"
import {BtnCrear} from "./components/btnCrear/btnCrear"
import { ShopBackground } from './components/shopBackground/ShopBackground';
import {Nav} from "./components/nav/nav"
import { Producto} from "./components/productoTienda/producto"
import { SecionTienda} from "./components/secionTienda/secionTienda"



const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const init2 = () => {
    return JSON.parse(localStorage.getItem('estado')) || [{"oro":0,"exp":0,"vida":100,"lvl":0,poke:"Huevo","infoPoke":{}}];
}


export const TodoApp = () => {
    const refId = useRef(null);
    const [todos, dispatch] = useReducer(todoReducer, [],init);

    const [estado, setestado] = useReducer(estadoReduce, [], init2);

    const [ModalV,setModal]=useState(false)
    const mostarModal=()=>{
        // eslint-disable-next-line no-unneeded-ternary
        setModal(!ModalV ? true : false )
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
            revisarPoke={revisarPokemon}
            data = {todo}
            datos = {estado}
            estadoActual = {setestado}
            funcDispatch = {dispatch}
            funcModal ={mostarModal}
            idRef = {refId}
            />
        ))
        
        
        // console.log(to)
        return to
    }
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
    useEffect( () => {
        console.log(estado);
        localStorage.setItem('estado', JSON.stringify(estado))
    }, [estado]);
    const handleSubmit = (e) =>{
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
            console.log(editarTodo)
            dispatch( editarTodo )
            resetearModal()
        }
        // reset();
    }
    
    return (
        <div >

            <Nav datos = {estado} />
            <PokeEspacio datos = {estado}/>
            <Switch>
                <Route path='/tienda'>
                        <ShopBackground/>
                        <SecionTienda titulo="objetos">
                            <Producto img="1001469812.jpeg"
                                    nombrePro="Pocion Vida"
                                    precio="10"/>
                            <Producto img="1001469815.jpeg"
                                    nombrePro="Pocion Exp"
                                    precio="5"/>
                            <Producto img="1001469813.jpeg"
                                    nombrePro="Dia descanso"
                                    precio="15"/>
                            <Producto img="pngwing.com.png"
                                    nombrePro="Huevo"
                                    precio="30" />
                        </SecionTienda>
                        <SecionTienda titulo="Piedras">
                            <Producto/>
                            <Producto/>
                            <Producto/>
                            <Producto/>
                        </SecionTienda>
                </Route>
                <Route path='/'>
                <button type='button' onClick={()=>pokedex()}>reinicio</button>
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


async function revisarPokemon(state,setestado){
    if(state["exp"]){
        console.log("esta entreando ");
        if(state["lvl"]===0){
            const npokemon=Math.floor(Math.random() * (67 - 1)) + 1;
            const poked=await pokedex()
            state["infoPoke"]=poked[npokemon]
            state["poke"]=state["infoPoke"][1]
            console.log(state["infoPoke"]);
            console.log(state["poke"]);
            setestado({ type:"Pokemon", estado:state})
        }
        else if(state["lvl"]>0){
            if(state["poke"]===state["infoPoke"]["1"]){
                if(Object.keys(state["infoPoke"]).length>2){
                    if(state["lvl"]>=state["infoPoke"]["lvl1"]){
                        state["poke"]=state["infoPoke"]["2"]
                    }
                }
            }
            if(state["poke"]===state["infoPoke"]["2"]){
                if(Object.keys(state["infoPoke"]).length>4){
                    if(state["lvl"]>=state["infoPoke"]["lvl2"]){
                        state["poke"]=state["infoPoke"]["3"]
                    }
                }
            }
        }
    }
    
}


function finDia(tasks,dispatch,setestado){
    const d= new Date()
    const hour= d.getHours()
    if(hour===0){
        for (const task of tasks) {
            if(task.done===false){
                setestado({ type: 'noComplet',
                            payload: ""})
            }else{
                dispatch({  type: 'toggle',
                            payload: task.id})
            }
        }
    }
}
