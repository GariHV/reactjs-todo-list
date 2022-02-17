import React, { useEffect, useReducer,useState } from 'react'
import Forms from './components/Forms';
import { Task } from './components/task/task';
// import { useForm } from './hooks/useForm';
import './styles.css'
import { todoReducer } from './todoReducer';
import {ListaTasks} from "./components/listaTasks/listaTasks"
import {PokeEspacio} from "./components/pokeEspacio/pokeEspacio"
import {Modal} from "./components/modal/modal"
import {BtnCrear} from "./components/btnCrear/btnCrear"


const init = () =>{

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [ModalV,setModal]=useState(false)
    const modtrarOptions=()=>{
        console.log(ModalV)
        // eslint-disable-next-line no-unneeded-ternary
        setModal(!ModalV ? true : false )
    }

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleSubmit = (e) =>{
        const {name, lastname, chancho, radio} = e;
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
        dispatch( añadirTodo );
        // reset();
    }

    
    
    return (
        <div >
            <div className='app'>
                <PokeEspacio/>
                <div className='generalTodo'>
                    <ListaTasks
                    nTask={todos.length}
                    titulo="Tareas diarias">
                        {todos.map( (todo) => (
                            <Task key={todo.id}
                            data = {todo}
                            funcDispatch = {dispatch}
                            />
                        ))
                        }
                    </ListaTasks>
                    <ListaTasks
                    nTask={todos.length}
                    titulo="Tareas Pendientes"
                    >
                        {todos.map( (todo) => (
                            <Task key={todo.id}
                            data = {todo}
                            />
                        ))
                        }
                    </ListaTasks>
                </div>
                <BtnCrear  func={modtrarOptions}/>
                {ModalV ?
                    <Modal func ={modtrarOptions}>
                            <Forms
                            onSubmit={handleSubmit}
                            />
                    </Modal>
                    :null}
            </div>
        </div>
    )
}