import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch"
import LineChartCases from "../components/LineChartCases";
import CountryStats from "./CountryStats";
import LineChartDeaths from "../components/LineChartDeaths"

export default function CountryMainPage(props){
  const [data1, setData1] = useState({})
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const link1 = "https://corona.lmao.ninja/v2/countries/" + props.country + "?yesterday&strict&query%20"
  const link2 = "https://corona.lmao.ninja/v2/historical"

  useEffect(()=>{
      Promise.all([
          fetch(link1),
          fetch(link2)
      ]).then(function (responses) {
          // Get a JSON object from each of the responses
          return Promise.all(responses.map(function (response) {
              return response.json();
          }));
      }).then(function (data) {
          setData1(data[0])
          setData(data[1])
          setLoading(false)
      }).catch(function (error) {
          console.log(error);
      });
  },[])

  var countryStats;

  if(!loading){

    var countryName = data1.country;
    countryStats = data.filter(obj => {
        if(obj.country == countryName && obj.province==null)
        return obj.country == countryName
    })
  
  }

    if(!loading){
      return (
        <div className="country-data">
          <div className="main-country-graph">
            <LineChartCases chartData={countryStats[0]} country={props.country} />
          </div>
          <div className="main-country-graph">
            <LineChartDeaths chartData={countryStats[0]} />
          </div>
          <div className="country-stats">
            <CountryStats country={props.country} chartData={countryStats[0]} countryISO2={data1.countryInfo.iso2}/>
          </div> 
        </div>
      );
    }
}
      
