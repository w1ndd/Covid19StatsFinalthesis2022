import React, { useEffect, useState } from 'react'
import LineChart from './charts/LineChart';

export default function LineChartCases(props) {
    let lastDates = Object.keys(props.chartData.timeline.cases).slice(0, 31);
    let lastNumbers = Object.values(props.chartData.timeline.cases).slice(0, 31);

    
      var graphData = {
            labels: lastDates,
            datasets: [
              {
                label: "Juhtumite arv",
                data: lastNumbers,
                backgroundColor: ["#fe21e2",],
                borderColor: "black",
                borderWidth: 1,
              },
            ],
          };

        return (
            <>
            <h1>{props.country}</h1>
              <LineChart chartData={graphData} />
            </>
        ) 
}
