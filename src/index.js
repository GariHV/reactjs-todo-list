import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom'
import {TodoApp} from './TodoApp'


ReactDom.render(
    <React.StrictMode>
    <BrowserRouter>
        <TodoApp />
    </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)