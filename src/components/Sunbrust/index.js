import React, { Component } from 'react'
import { ResponsiveSunburst } from '@nivo/sunburst';
import data from './data'




class index extends Component {
    componentDidUpdate() {
        console.log(this.props)
    }
    render() {
        console.log(this.props.root)
        return (
            <div style={{ width: 400, height: 400 }}>
                <ResponsiveSunburst
                    data={this.props.root}
                    margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
                    identity="name"
                    value="loc"
                    cornerRadius={this.props.padding}
                    borderWidth={this.props.borderWidth}
                    borderColor="white"
                    colors={{ scheme: 'dark2' }}
                    childColor={{ from: 'color' }}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    isInteractive={true}
                />

            </div>
        );
    }
}

export default index;