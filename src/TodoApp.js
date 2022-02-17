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
    const mostarModal=()=>{
        console.log(ModalV)
        // eslint-disable-next-line no-unneeded-ternary
        setModal(!ModalV ? true : false )
    }

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleSubmit = (e) =>{
        const {name, lastname, chancho, radio,edit} = e;
        console.log(e);
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
        
        const editarTodo = {
            type:'edit',
            payload: newTodo
        }
        if(edit===0){
            dispatch( añadirTodo )
        }else  dispatch( editarTodo )
       
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
                            funcModal ={mostarModal}
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
                <BtnCrear  func={mostarModal}/>
                {ModalV ?
                    <Modal func ={mostarModal}>
                            <Forms
                            onSubmit={handleSubmit}
                            />
                    </Modal>
                    :null}
            </div>
        </div>
    )
}