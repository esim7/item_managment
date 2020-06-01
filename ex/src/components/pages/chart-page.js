import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


export default class ChartPage extends Component
{
    constructor(props) 
    {
        super(props);
         this.state = {
            chartData: this.serializeToChartData(props.itemData)
         }
         console.log(this.state.chartData);

    }

    serializeToChartData = (data) => {
        var chartData = 
        {
            labels: [],
            datasets : [
                {
                    label: 'Количество товара',
                    data: [],
                    backgroundColor: []
                }
            ],
            
        };
        data.map((element) => {
            var i = 0;
            chartData.labels.push(element.name);
            chartData.datasets[i].data.push(element.count);
            chartData.datasets[i].backgroundColor.push(`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`);
            i++;
        })
        return chartData;
    }
    
    state = {
        chartData: {},
    }


    render()
    {
        var {itemData} = this.props;
        if(!itemData.length)
            return <h2 className="mt-5">Товаров не найдено!</h2>
        return (
            <div className="container">
                <Bar 
                    data={this.state.chartData}
                    height={500}
                    options={{
                        maintainAspectRatio:false,
                        
                    }}
                >
                </Bar>
            </div>
        )
    }
}