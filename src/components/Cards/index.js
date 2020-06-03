import React, { Component } from 'react'
import './cards.scss'

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Card Title',
            description: 'I am simple card.',
            tag: 'Card'
        }
    }
    
    render() {
        const style={
            height: '100%',
            width: '100%'
        }
        const title = this.props.title ? this.props.title : this.state.title
        const description = this.props.description ? this.props.description : this.state.description
        const tag = this.props.tag ? this.props.tag : this.state.tag
        return (
            <section className="cards-wrapper">
                <div className="card">
                    {this.props.image && <img src={this.props.image} style={style}/>}
                    <div>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <div className='tags'>
                            <div className="tag">{tag}</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default index
