import React from 'react';



//  Components
import TodoApp from './components/Input';

//  Folha de estilos
import './css/style.css'; // Folha principal do corpo
import './css/inputStyle.css';




function App() {

    return (
        <React.Fragment>
            <div className="div-input">
                <TodoApp />
            </div>
        </React.Fragment>
    );

}

export default App