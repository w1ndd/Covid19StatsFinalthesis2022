import React, { useState, useRef, Component, createContext } from "react"
import LineChartCases from "../components/LineChartCases";
import CountryStats from "./CountryStats";
import LineChartDeaths from "../components/LineChartDeaths"

export default class GraphData extends Component {
  constructor() {
    super();
    this.state = {
      datesArray: [],
      userData: {},
      loaded: false,
      error: false
    };
  }

  componentDidMount() {
    let cntry = this.props.country;
    fetch(
      "https://covid-api.mmediagroup.fr/v1/history?country=" +
        cntry + "&status=confirmed"
    )
      .then((res) => res.json())
      .then((res) => {
        let fileList = res.All.dates;
        this.setState({
          datesArray: fileList,
        });
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        this.setState({
          loaded: true,
        });
      });
  }

  render() {
    if(this.state.error) {
      return (
        <>
        Mingi probleem juhtus. Proovige veel kord. Otsides ärge kasutage tühikuklahvi!
        </>
      )
    } else if(this.state.loaded){
        return (
          <div className="country-data">
            <div className="main-country-graph">
              <LineChartCases chartData={this.state.datesArray} country={this.props.country} />
            </div>
            <div className="main-country-graph">
              <LineChartDeaths country={this.props.country} />
            </div>
            <div className="country-stats">
              <CountryStats country={this.props.country} chartData={this.state.datesArray}/>
            </div> 
          
          </div>
        );
      } else {
          return(
            <div>
                Üleslaadimine...
            </div>
          )
      }
  }
}

