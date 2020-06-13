import React,{Component} from 'react'
import { ResponsiveBubble } from '@nivo/circle-packing'




class index extends Component {
    componentDidUpdate(){
        console.log(this.props)
    }
    render() {
        console.log(this.props.root)
        return (
            <div style={{width:400,height:400}}>
                <ResponsiveBubble
                key={this.props.root}
            
                    root={this.props.root}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    identity="name"
                    value="loc"
                    colors={{ scheme: 'accent' }}
                    padding={this.props.padding}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
                    borderWidth={this.props.borderWidth}
                    borderColor={{ from: 'color' }}
                    defs={[
                        {
                            id: 'lines',
                            type: '',
                            background: 'none',
                            color: 'inherit',
                            rotation: -45,
                            lineWidth: 5,
                            spacing: 8
                        }
                    ]}
                    fill={[{ match: { depth: 1 }, id: 'lines' }]}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={12}
                />
                <h1>{this.props.checktext}</h1>

            </div>
        );
    }
}

export default index;