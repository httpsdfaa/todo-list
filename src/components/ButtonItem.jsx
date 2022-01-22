import React, { Component } from 'react'

export default class ButtonItem extends Component {
    render() {
        const {nameButton} = this.props
        return (
            <button type="button">{nameButton}</button>
        )
    }
}