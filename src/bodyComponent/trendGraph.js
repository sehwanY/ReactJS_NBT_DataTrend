import React, { Component } from 'react'
import {AreaSeries, XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines} from 'react-vis';
//LineMarkSeries, LineSeries

class trendGraph extends Component {
    
    
    render() {
        const data = new Array(19).fill(0).reduce((prev, curr) => [...prev, {
            x: prev.slice(-1)[0].x + 1,
            y: prev.slice(-1)[0].y * (0.9 + Math.random() * 0.2) 
          }], [{x: 0, y: 10}]);
            
        console.log(this.props.values)
        return (
            <div id="chart">
                <XYPlot width={1500} height={200}>
                <XAxis/>
                <YAxis/>
                <HorizontalGridLines />
                <VerticalGridLines />
                <AreaSeries 
                    data={this.props.testt}
                />
                </XYPlot>;
            </div>
        )
    }
}


export default trendGraph