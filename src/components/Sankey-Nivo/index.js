import React, { Component } from "react";
import { ResponsiveSankey } from "@nivo/sankey";

class MySankey extends Component {
  render() {
    const colortheme = this.props.data.nodes.map((node) => node.color);
    var commonProperties = {
      margin: { top: 0, right: 80, bottom: 0, left: 80 },
      colors: colortheme,
      nodeOpacity: 0.7,
      nodeThickness: 18,
      nodeInnerPadding: 3,
      nodeSpacing: 22,
      nodeBorderWidth: 0,
      nodeBorderColor: { from: "color", modifiers: [["darker", 0.8]] },
      linkOpacity: 0.5,
      linkHoverOthersOpacity: 0.1,
      linkBlendMode: "normal",
      enableLinkGradient: true,
      labelPadding: 16,
      motionStiffness: 140,
      motionDamping: 13,
    };
    return (
      <>
        <ResponsiveSankey
          {...commonProperties}
          labelOrientation={this.props.labelOrientation}
          data={this.props.data}
          labelTextColor={this.props.labelColor}
          animate={this.props.isanimate}
          labelPosition={this.props.labelPosition}
          enableLabels={this.props.enableLabels}
        />
      </>
    );
  }
}

export default MySankey;
