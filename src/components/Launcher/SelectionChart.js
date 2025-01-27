import React from 'react'
import { Line, defaults } from 'react-chartjs-2'
import "../../css/graphcss.css"

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = 'bottom';

const SelectionChart = (props) => {
    return (
        <div className="gsocChart" >
            <Line
                data={{
                    labels: ['2010','2011','2012','2013','2014','2015','2016', '2017', '2018', '2019', '2020', '2021'],
                    datasets: [
                        {
                            label: '% of Participants successful',
                            data: [80,82,81,83,85,89,88,88.50,88.90,89.70,88.20, 85.60, 86.20, 86.24, 89.05, 92.32, 93.27],
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                        },
                    ],
                    }
                }
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                    legend: {
                        labels: {
                            fontSize: props.font,
                        },
                    },
                }}
            />
        </div>
    )
}

export default SelectionChart;