import React, { Component } from 'react'
import './cards.scss'

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    renderDefault() {
        return (
            <section className="cards-wrapper">
                <div className="card">
                    <div>
                        <h1>Card Title</h1>
                        <p>I am simple card.</p>
                        <div className='tags'>
                            <div className="tag">ReactJS</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    render(){
        if(this.props.mode === 'default') return this.renderDefault()
    }
}

export default index
