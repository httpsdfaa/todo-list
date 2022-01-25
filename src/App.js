import React from 'react';



//  Components
import Input from './components/Input';
import Main from './components/Main';

//  Folha de estilos
import './css/mainStyle.css';
import './css/style.css'; // Folha principal do corpo
import './css/inputStyle.css';



function App() {

    return (
        <>
            <div class="div-input">
                <Input name="" nameBtn="Crie item" />
            </div>
            <div class="div-main">
                <Main name="Vazio" />
            </div>
        </>
    );
}

export default App