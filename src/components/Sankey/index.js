import React from "react";
import Chart from "react-google-charts";

class Sankey extends React.Component {

    render() {
        const data = [
            ['From', 'To', 'Trade in Billion $'],
            ['Brazil', 'Portugal', 5],
            ['Brazil', 'France', 1],
            ['Brazil', 'Spain', 1],
            ['Brazil', 'India', 4],
            ['Canada', 'Portugal', 1],
            ['Canada', 'France', 5],
            ['Canada', 'England', 1],
            ['Mexico', 'Portugal', 1],
            ['Mexico', 'France', 1],
            ['Mexico', 'Spain', 5],
            ['Mexico', 'England', 1],
            ['Mexico', 'Mali', 1],
            ['USA', 'Portugal', 1],
            ['USA', 'France', 1],
            ['USA', 'Spain', 1],
            ['USA', 'England', 5],
            ['Portugal', 'Angola', 2],
            ['Portugal', 'Senegal', 1],
            ['Portugal', 'Morocco', 1],
            ['Portugal', 'South Africa', 3],
            ['France', 'Angola', 1],
            ['France', 'Senegal', 3],
            ['France', 'Mali', 3],
            ['France', 'Morocco', 3],
            ['France', 'South Africa', 1],
            ['Spain', 'Senegal', 1],
            ['Spain', 'Morocco', 3],
            ['Spain', 'South Africa', 1],
            ['England', 'Angola', 1],
            ['England', 'Senegal', 1],
            ['England', 'Morocco', 2],
            ['England', 'South Africa', 7],
            ['South Africa', 'China', 5],
            ['South Africa', 'India', 1],
            ['South Africa', 'Japan', 3],
            ['Angola', 'China', 5],
            ['Angola', 'India', 1],
            ['Angola', 'Japan', 3],
            ['Senegal', 'China', 5],
            ['Senegal', 'India', 1],
            ['Senegal', 'Japan', 3],
            ['Mali', 'China', 5],
            ['Mali', 'India', 1],
            ['Mali', 'Japan', 3],
            ['Morocco', 'China', 5],
            ['Morocco', 'India', 1],
            ['Morocco', 'Japan', 3],
        ];
        const colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
            '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

        const options = {
            sankey: {
                link: {
                    colorMode: 'gradient',
                    colors: { colors }
                },
                node: {
                    colorMode: 'unique',
                    colors: { colors },
                    interactivity: true,
                    label: {
                        fontName: 'Calibri',
                        fontSize: 10,
                        color: '#ccc',
                    },
                },
            },
            tooltip: {
                isHtml: false,
                textStyle: {
                    color: '#777',
                    fontName: 'Arial',
                    fontSize: 10,
                    bold: true,
                    italic: false,
                },
                showColorCode: true
            },
            legend: {
                position: 'bottom-right'
            },
        };
        return (
            <div className="App">
                <Chart
                    width={'50vw'}
                    height={'75vh'}
                    chartType="Sankey"
                    loader={<div>Loading Chart</div>}
                    options={options}
                    data={data}
                    rootProps={{ 'data-testid': '1' }}
                    legendToggle
                />
            </div>
        );
    }
}
export default Sankey;
