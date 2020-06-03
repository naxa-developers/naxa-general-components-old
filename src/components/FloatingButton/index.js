import React, { Component } from 'react'
import './floatingbutton.scss'

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            top: '',
            bottom:'',
            left: '',
            right: ''
        }
    }
    
    render() {
        const style={
            top : this.props.top ? this.props.top+'px' : this.state.top+'px',
            bottom : this.props.bottom ? this.props.bottom+'px' : this.state.bottom+'px',
            left : this.props.left ? this.props.left+'px' : this.state.left+'px',
            right : this.props.right ? this.props.right+'px' : this.state.right+'px',
        }
        return(
            <div class='floating-button' style={style}>{this.props.text}</div>
        )
    }
}

export default index
