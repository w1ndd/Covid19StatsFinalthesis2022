import React, { useState } from 'react'
import LineChart from './components/LineChart';


export default function Graph({country}) {

    const [grapghData, setGraphData] = useState([]);

    console.log("2")

    const dataFrom2 = async () => {
        const data = await fetch(
            "https://covid-api.mmediagroup.fr/v1/history?country=" +
              country +
              "&status=confirmed"
        )
        .then((res) => res.json())
        .then((res) => res.All.dates)
        .then((res) => setGraphData(res))
        .then((res) => console.log(res))
        .catch((err) => {
            console.log(err);
        });

        
    };

    // setGraphData(dataFrom2)
    
    const [userData, setUserData] = useState({
        labels: ["123", "321"],
        datasets: [
          {
            label: "smth",
            data: ["123", "321"],
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

    

    return(
        <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
    )
}