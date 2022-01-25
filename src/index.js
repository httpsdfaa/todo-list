import React from 'react'
import ReactDom from 'react-dom'

import App from './App'

import ApiTodolist from './api/Todo-list'


import {
    BrowserRouter,
    Routes,
    Route
 } from 'react-router-dom'


ReactDom.render(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="api/TodoList" element={<ApiTodolist />} />
        </Routes>
    </BrowserRouter>   
    ,
    document.getElementById('root')

)