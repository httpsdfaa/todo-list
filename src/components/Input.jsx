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

        const borderSimpli = {
            boxShadow: '1px 0 2px 0 rgba(170, 170, 170,0.5)',
            border: '1px solid rgb(210, 210, 210)'
        }

        //  EVENTOS DOM

        const onMouseOver = (e) => {    //  BUTTON
            e.target.style.boxShadow = borderSimpli.boxShadow
            e.target.style.border = borderSimpli.border
        }

        const mouseOverInput = (e) => {
            e.target.style.boxShadow = 'none'
            e.target.style.border = borderSimpli.border
            e.target.style.background = 'rgb(250, 250, 250)'
        }

        const mouseOutInput = (e) => {
            e.target.style.boxShadow = ''
            e.target.style.border = ''
            e.target.style.background = ''
        }

        const onMouseOut = (e) => {     //  BUTTON
            e.target.style.boxShadow = ''
            e.target.style.border = ''
        }

        const onMouseDown = (e) => {    //  BUTTON
            e.target.style.boxShadow = ''
            e.target.style.border = ''
        }

        const onMouseUp = (e) => {    //  BUTTON
            e.target.style.boxShadow = borderSimpli.boxShadow
            e.target.style.border = borderSimpli.border
        }


        return (


            <React.Fragment>
                <h1>Lista de Tarefas</h1>
                <form id="form-new-todo" onSubmit={this.handleSubmit} >
                    <div id="div-btn-input">
                        <input id="new-todo"
                            onChange={this.handleChange}
                            value={this.state.text}
                            onMouseOver={mouseOverInput}
                            onMouseOut={mouseOutInput}
                            maxLength='26'
                        />
                        <button onMouseOver={onMouseOver} onMouseOut={onMouseOut}
                            onMouseDown={onMouseDown} onMouseUp={onMouseUp} >
                            Criar
                        </button>
                    </div>

                </form>
                <TodoList items={this.state.items} />

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
            <ul id='ul-list'>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }


}
