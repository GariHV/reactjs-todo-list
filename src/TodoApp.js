import React, { useEffect, useReducer } from 'react'
import Forms from './components/Forms';
import { Task } from './components/task/task';
// import { useForm } from './hooks/useForm';
import './styles.css'
import { todoReducer } from './todoReducer';


const init = () =>{

    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    // const [{description}, reset] = useForm({
    //     description:''

    // });

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    
    const handleSubmit = (e) =>{
        console.log(e);
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
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                <ul className='list-group list-group-flush'>
                {todos.map( (todo) => (
                    <Task key={todo.id}
                    data = {todo}
                    />

                ))
                }
            </ul>
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    {
                    
                    <Forms
                    onSubmit={handleSubmit}
                    />
                    /* <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            name='description'
                            placeholder='Debería...'
                            autoComplete='off'
                            onChange={handleInputChange}
                            value={description}
                        />
                        <button
                        className='btn btn-outline-primary mt-1 btn-block'
                        type='submit'
                        >
                            Agregar
                        </button>
                    </form> */}
                </div>
            </div>
        </div>
    )
}