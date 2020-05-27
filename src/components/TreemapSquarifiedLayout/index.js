import React from 'react';

import {Treemap} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
// import ShowcaseButton from '../showcase-components/showcase-button';

function _getRandomData(total) {
  const totalLeaves = total || Math.random() * 20;
  const leaves = [];
  for (let i = 0; i < totalLeaves; i++) {
    leaves.push({
      name: total ? total : String(Math.random()).slice(0, 3),
      size: Math.random() * 1000,
      color: Math.random(),
      style: {
        border: 'thin solid red'
      }
    });
  }
  return {
    title: '',
    color: 1,
    children: leaves
  };
}

 class DynamicTreemapExample extends React.Component {
  state = {
    hoveredNode: false,
    treemapData: [],
    useCirclePacking: false
  };

  render() {
    //console.log(JSON.stringify(_getRandomData(20)));
    const {hoveredNode, useCirclePacking} = this.state;
    const treeProps = {
      animation: {
        damping: 9,
        stiffness: 300
      },
      data: this.props.data[0],
      onLeafMouseOver: x => this.setState({hoveredNode: x}),
      onLeafMouseOut: () => this.setState({hoveredNode: false}),
      onLeafClick: () => this.setState({treemapData: this.props.data[0]}),
      height: 300,
      mode: this.props.showCirclePack ? 'circlePack' : 'squarify',
      getLabel: x => x.name,
      width: 350
    };
    console.log("return return")
    var key = null;
    
    return ( 
      <div className="dynamic-treemap-example"
      key = {key}
      >
        {/* <button
          onClick={() => this.setState({useCirclePacking: !useCirclePacking})}
          //buttonContent={'TOGGLE CIRCLE PACK'}
        /> */}
        <Treemap {...treeProps} />
        click above to the update data
        {hoveredNode && hoveredNode.value}
      </div>
    );
  }
}
export default DynamicTreemapExample;