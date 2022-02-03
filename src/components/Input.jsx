import React from 'react'
import '../css/inputStyle.css'



export default class TodoApp extends React.Component {

    constructor(props) {  //  USADO PARA INICIALIZAR O ESTADO DE UM OBJETO. CHAMADO ANTES QUE O COMPONENTE SEJA MONTADO.
        super(props);   // PRECISA SER CHAMADO PARA NÃO DÁ BUG EM THIS.PROPS
        this.state = { items: [], text: '' }; //    ITEMS COM ARRAY E TEXT COMO STRING // Este é o meu padra zerado.
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    // USADO COMO SUBMIT EM MEU FORM
    }


    render() {

        console.log(this.state.items)
        return (

            <React.Fragment>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="new-todo">
                        Crie sua lista
                    </label>
                    <input id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Adicionar {this.state.items.length} 
                    </button>

                </form>
            </React.Fragment>
        )
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const newItem = {
            text: this.state.text,
            id: Date.now()
        }

        this.setState(state => ({
            items: state.items.concat(newItem), 
            text: ''
        }))

    }


}


class TodoList extends React.Component {


    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }


}
