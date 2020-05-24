import React, { Component } from 'react';
import { ResponsiveTreeMap } from '@nivo/treemap'

class index extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             key:0
        }
    }
    

    componentDidMount() {
        console.log(this.props)
    }

  

    
    render() {
        console.log(this.props.data)
        return (

            // this.state.Chart
            <>

            {this.props.data.map(a=>{
                console.log(typeof a,a,"a")
            
                return<ResponsiveTreeMap
                key={Math.random()}
               
             
                root={a}
                identity="name"
                value="loc"
                innerPadding={this.props.innerPadding}
                outerPadding={this.props.outerPadding}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                label="loc"
                labelFormat=".0s"
                labelSkipSize={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.2]] }}
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={11}
            />
           
             }) 
            
            }
            </>
          



        );
    }
}

export default index;