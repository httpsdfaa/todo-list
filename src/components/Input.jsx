import React from 'react'
import '../css/inputStyle.css'



function Input() {

    const [nameInput, setNameInput] = React.useState('')
    const [update, setUpdate] = React.useState('Vazio')


    const onSubmit = (e) => { //    Evento Submit. Porem é uma funcao para transformar em JSON
        e.preventDefault()
        
        setUpdate(<span className="span-empty">{nameInput}</span>)
      
    }   


    return (

        <React.Fragment>
            <form action="#" id="form-input" onSubmit={onSubmit}>
                <label htmlFor='list-item'>
                    <input type="text" id="list-item" name="list-item" placeholder="Crie item..."
                        value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                </label>
                <label htmlFor="btn-list-item">
                    <input type="submit" id="btn-list-item" name="btn-list-item"
                        value='Enviar' ></input>
                </label>
            </form>
            <div className='div-spanEmpty'>
                {update}
            </div>
        </React.Fragment>
    )

}

export default Input
