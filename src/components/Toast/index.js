import React, { Component } from 'react'




class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: this.props.show
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({ show: false })
        }, 2000)

    }
    render() {
        let styl;
        if (this.props.position == 'bottomleft') {
             styl = { color: 'white', display: this.state.show ? 'block' : 'none', position: 'absolute', left: 20, bottom: 10, }

        }
        else if(this.props.position== 'topleft' ){
         styl = { color: 'white', display: this.state.show ? 'block' : 'none', position: 'absolute', left: 20, top: 10 }

        }
        else if(this.props.position== 'bottomright' ){
            styl = { color: 'white', display: this.state.show ? 'block' : 'none', position: 'absolute', right: 20, bottom: 10 }
   
           }
           else if(this.props.position== 'topright' ){
            styl = { color: 'white', display: this.state.show ? 'block' : 'none', position: 'absolute', right: 20, top: 10 }
   
           }


     

        console.log(this.props.bg,styl)
        return (
            <div style={styl}>
                <div style={{ backgroundColor: this.props.bg, padding: 10 }}>
                    Toast Msg
                </div>
            </div>
        );
    }
}

export default index;