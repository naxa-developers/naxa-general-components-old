import React, { Component } from 'react'
import './preloaders.scss'

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 40,
            height: 40,
            color: 'blue',
            borderBackground: 'white',
            borderWidth: 3
        }
    }
    render() {
        const style={
            border: `${this.props.borderWidth ? this.props.borderWidth : this.state.borderWidth}px solid ${this.props.borderBackground ? this.props.borderBackground : this.state.borderBackground}`,
            width: `${this.props.width ? this.props.width : this.state.width}px`,
            height: `${this.props.height ? this.props.height : this.state.height}px`,
            borderTop: `${this.props.borderWidth ? this.props.borderWidth : this.state.borderWidth}px solid ${this.props.color ? this.props.color : this.state.color}`,
        }
        const imageStyle={
            width: `${this.props.width ? this.props.width : this.state.width}px`,
            height: `${this.props.height ? this.props.height : this.state.height}px`
        }
        return (
            <>
                <div style={this.props.image ? imageStyle : style} class={this.props.className}>
                    {this.props.image && <img src={this.props.image} style={imageStyle} />}
                </div>
            </>
        )
    }
}

export default index
