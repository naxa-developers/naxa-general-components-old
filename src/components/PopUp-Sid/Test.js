import React, { Component } from 'react'

export class Test
    extends Component {
    render() {
        return (
            <div>
                <input type='text' /> <p>{this.props.test}</p>
            </div>
        )
    }
}

export default Test;

