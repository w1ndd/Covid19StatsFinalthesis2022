import { useEffect, useState } from "react"
import LineChart from "./charts/LineChart";

export default function LineChartDeaths(props){

    let lastDates = Object.keys(props.chartData.timeline.deaths).slice(0, 31);
    let lastNumbers = Object.values(props.chartData.timeline.deaths).slice(0, 31);

    var graphData = {
        labels: lastDates,
        datasets: [
            {
            label: "Surnud inimeste arv",
            data: lastNumbers,
            backgroundColor: ["#e83b67"],
            borderColor: "black",
            borderWidth: 1,
            },
        ],
    };

    
    return(
        <div className="Container-line-chart-deaths">
            <div className="main-country-graph">
                <LineChart chartData={graphData}/>
            </div>
        </div>
    )
    
}