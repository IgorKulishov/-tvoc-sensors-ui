import React from "react";
import Chart from 'chart.js';

export default class Tvocgraph extends React.Component  {
    constructor() {
       super();
       this.state = {};
    }

    componentDidMount () {
        fetch('https://qv8qd2cndh.execute-api.us-east-1.amazonaws.com/dev/sensor-records')
            .then(resp => resp.json())
            .then(data => this.setState({data}));
    }

    render () {
        return (
            <div>
                <canvas id="tvoc-chart" width="200" height="200"></canvas>
            </div>
        )
    }

    componentDidUpdate() {
        const ctx = document.getElementById('tvoc-chart');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.state.data.map((tvocRead) => +tvocRead.sensorRecords.TVOC ),
                datasets: [{
                    label: 'TVOC reads',
                    data: this.state.data.map((tvocRead) => +tvocRead.sensorRecords.TVOC ),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}
