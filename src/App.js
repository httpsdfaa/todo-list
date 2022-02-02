import React from 'react';



//  Components
import Input from './components/Input';

//  Folha de estilos
import './css/style.css'; // Folha principal do corpo
import './css/inputStyle.css';




function App() {

    return (
        <React.Fragment>
            <div className="div-input">
                <Input nome="" />
            </div>
        </React.Fragment>
    );

}

export default App