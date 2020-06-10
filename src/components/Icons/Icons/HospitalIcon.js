import React, { Component } from "react";

class HospitalIcon extends Component {
    constructor(props) {
      super(props);
      this.state = {
            style: this.props.type =="circular"?
            {
              padding:2,
              width:this.props.height?this.props.height:"20px",
              height:this.props.height?this.props.height:"20px", 
              borderRadius:"50%", 
              backgroundColor: this.props.background? this.props.backgroundColor?this.props.backgroundColor:"#FFFFFF":"transparent",
              display: "inline-block", 
              border:"solid 1px #c2c2c2"
            }:
            {
              padding:2,
              borderRadius: 0, 
              width: this.props.height?this.props.height:"20px", 
              height:this.props.height?this.props.height:"20px",
              backgroundColor: this.props.background? this.props.backgroundColor?this.props.backgroundColor:"#FFFFFF":"transparent",
            },
            fill: this.props.iconColor?this.props.iconColor:"#FF0000",
            viewBox: "0 0 32 48"
          
      }
    }
    componentDidMount() {}

    componentDidUpdate(prevProps, prevState){
      if(prevProps.type!=this.props.type || prevProps.height!=this.props.height || prevProps.background!=this.props.background || prevProps.backgroundColor!=this.props.backgroundColor){
        this.setState({style:this.props.type =="circular"?
          {
            padding:2,
            width:this.props.height?this.props.height:"20px",
            height:this.props.height?this.props.height:"20px", 
            borderRadius:"50%", 
            backgroundColor: this.props.background? this.props.backgroundColor?this.props.backgroundColor:"#FFFFFF":"transparent",
            display: "inline-block", 
            border:"solid 1px #c2c2c2"
          }:
          {
            padding:2, 
            borderRadius: 0, 
            width:this.props.height?this.props.height:"20px",
            backgroundColor: this.props.background? this.props.backgroundColor?this.props.backgroundColor:"#FFFFFF":"transparent", 
            height:this.props.height?this.props.height:"20px"
          }
        })
      }
      if(prevProps.iconColor!=this.props.iconColor){
        this.setState({fill:this.props.iconColor?this.props.iconColor:"#FF0000"})
      }
    }
    // .dot {
    //   height: 17px;
    //   width: 17px;
    //   background-color: #ffffff;
    //   border-radius: 50%;
    //   display: inline-block;
    //   border:solid 1px #c2c2c2;
    //   @media #{$breakpoint-desktop}{
    //       height: 15px;
    //       width: 15px;
    //   }
    // }
  
    // .dot:hover{
    //   border:solid 1px blue;
    // }
    render() {
        console.log(this.props);
        return (
          <svg xmlns="http://www.w3.org/2000/svg"
          style={this.state.style}
          viewBox={this.state.viewBox}>
          <title>Health Facility</title>
                      <path className="cls-1" d="M28,0a3.99992,3.99992,0,0,0-4,4V20H8V4A4,4,0,0,0,0,4V44a4,4,0,0,0,8,0V28H24V44a4,4,0,0,0,8,0V4A3.99992,3.99992,0,0,0,28,0Z"
                      fill={this.state.fill}
                      />
          </svg>
        )
    }
}

export default HospitalIcon;