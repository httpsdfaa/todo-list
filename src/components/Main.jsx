import React, {Component} from 'react'

import '../css/mainStyle.css'

export default class Main extends Component {
    render() {
        const {name} = this.props
        return (
                <span class="span-empty">{name}</span>
        )
    }
}