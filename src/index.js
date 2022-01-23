import React from 'react'
import ReactDom from 'react-dom'

import Input from './components/Input'
import Main from './components/Main'

import './css/mainStyle.css'
import './css/style.css' // Folha principal do corpo
import './css/inputStyle.css'

ReactDom.render(
    <>
        <div class="div-input">
            <Input name="" nameBtn="Crie item" />
        </div>
        <div class="div-main">
            <Main name="Vazio" />
        </div>
    </>,
    document.getElementById('root')

)