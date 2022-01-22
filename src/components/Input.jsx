import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        const {name} = this
        return (
            <form action="#">
                <label for="list-item">
                    <input type="text" id="list-item" name="list-item" placeholder="Crie item..." value={name}/>
                </label>
            </form>
        )
    }
}