import React, { Component } from 'react'

import '../css/inputStyle.css'

export default class Input extends Component {
    render() {
        const {nameInput} = this
        const {nameBtn} = this.props
        return (
            <form action="#" id="form-input">
                <label for="list-item">
                    <input type="text" id="list-item" name="list-item" placeholder="Crie item..." value={nameInput}/>
                </label>
                <label for="btn-list-item">
                    <input type="button" id="btn-list-item" name="btn-list-item" value={nameBtn}></input>
                </label>
            </form>
        )
    }
}