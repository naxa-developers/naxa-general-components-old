import React, { Component } from 'react';
import { ResponsiveTreeMap } from '@nivo/treemap'
import data from './data'

class index extends Component {
    render() {
        return (
           
            <ResponsiveTreeMap
        
            root={data.root}
            identity="name"
            value="loc"
            innerPadding={this.props.innerPadding}
            outerPadding={this.props.outerPadding}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            label="loc"
            labelFormat=".0s"
            labelSkipSize={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.2 ] ] }}
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
            animate={true}
            motionStiffness={90}
            motionDamping={11}
        />

        );
    }
}

export default index;