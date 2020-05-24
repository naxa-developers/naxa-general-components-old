import React, { Component } from 'react';
import { ResponsiveSankey } from '@nivo/sankey'

class MySankey extends Component {
    render() {
        
        var commonProperties = {
            margin: { top: 0, right: 80, bottom: 0, left: 80 },
            colors: { scheme: 'nivo' },
            nodeOpacity: 0.7,
            nodeThickness: 18,
            nodeInnerPadding: 3,
            nodeSpacing: 22,
            nodeBorderWidth: 0,
            nodeBorderColor: { from: 'color', modifiers: [['darker', 0.8]] },
            linkOpacity: 0.5,
            linkHoverOthersOpacity: 0.1,
            enableLinkGradient: true,
            labelPadding: 16,
            motionStiffness: 140,
            motionDamping: 13,
        }
        return (
            <>
                <ResponsiveSankey 
                {...commonProperties}
                labelOrientation= {this.props.labelOrientation}
                data= { this.props.data }
                labelTextColor= { this.props.labelColor } 
                animate= {this.props.isanimate}
                labelPosition= {this.props.labelPosition}
                enableLabels = {this.props.enableLabels}
                />
            </>
        );
    }

}

export default MySankey;