import React, { Component } from 'react';
import Toast from './index'

class Wrapper extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:false
        }
    }
    

    show=()=>{
        this.setState({show:true})
    }
    render() {
        console.log(this.props.bg,"r")
        return (
            <div>
          
                
               <Toast position={this.props.position} show={this.state.show} 
               key={Math.random()}
                bg={this.props.bg}/>
               <button onClick={this.show} style={{margin:150}}>Show Toast</button>
            </div>
        );
    }
}

export default Wrapper;