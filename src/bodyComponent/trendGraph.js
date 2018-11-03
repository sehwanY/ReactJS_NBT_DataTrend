import React, { Component } from 'react'
//import {AreaSeries, XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines} from 'react-vis';
//LineMarkSeries, LineSeries
import {Line} from 'react-chartjs-2';
import './trendGraph.css'

class trendGraph extends Component{
    
    render() {
        const data = {
            labels: this.props.scaleX,
            datasets: [
              {
                label: 'Search_Count',
                tension: 0,
                borderColor: 'rgba(75,192,192,1)',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                radius: 0,
                borderWidth: 1,
                pointHitRadius: 5,
                data: this.props.scaleY
              }
            ]
          }
      return (
        <div className="chart">
          <h2>Trend Graph(Day)</h2>
          <Line 
            width={100}
            height={15}
            data={data} 
          />
        </div>
      )
    }
}

export default trendGraph