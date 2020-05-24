import React, { Component } from "react";
import ApexCharts from 'apexcharts';

class RadarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            categories:[],
        }
    }

    plotChart = (data, categories) =>{
      var options = {
        series: data,
        chart: {
          height: 350,
          type: 'radar',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        title: {
          text: 'Radar Chart - Multi Series'
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: categories
        },
        legend: {
          position: 'bottom',
          fontSize: '12px',
          labels: {
            show: true,
            colors:"#757575",
          },
        },
      };


        return options;
    }

    componentWillMount(){
      
    }//componentwillmount

    componentDidMount(){
          var options  = this.plotChart(this.props.data, this.props.categories);
          var chart = new ApexCharts(document.querySelector("#radarChart"), options);
          chart.render();
      
    }//componentdidmount

    componentDidUpdate(prevProps, prevStates){
          console.log(this.props.data)
          if(prevProps.data != this.props.data || prevProps.categories !== this.props.categories){
            var options  = this.plotChart(this.props.data, this.props.categories);
            var chart = new ApexCharts(document.querySelector("#radarChart"), options);
            chart.render();
          }
      
    }//componentdidupdate
    render() {
        var key = null;
        var currentComponent = this;
        this.props.data.map(d =>{
          Object.keys(d).map(function (key1, index1) {
            key = key + d[key1];
          })
        })
        this.props.categories.map(c =>{
          key = key + c;
        })
        console.log(key);
        return (
          <div id="radarChart" key = {key} />
        );
    }
}
export default RadarChart;