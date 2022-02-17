import React, { useEffect, useReducer,useState, useRef } from 'react'
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
    const refId = useRef(null);
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [ModalV,setModal]=useState(false)
    const mostarModal=()=>{
        // eslint-disable-next-line no-unneeded-ternary
        setModal(!ModalV ? true : false )

    }

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

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
            // dispatch( editarTodo )
        }

        // reset();
    }


    
    return (
        <div >
            <div ref={refId} hidden>1645119652987</div>
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
                            idRef = {refId}
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
                            id = {refId.current.innerHTML}
                            data = {todos}
                            />
                    </Modal>
                    :null}
            </div>
        </div>
    )
}