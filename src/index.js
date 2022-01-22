import React from 'react'
import ReactDom from 'react-dom'

import Input from './components/Input'
import ButtonItem from './components/ButtonItem'

ReactDom.render(
    <><div>
        <Input name="" />
    </div>
    <div>
        <ButtonItem nameButton="Crie"/>
    </div>
    </>,
    document.getElementById('root')

)