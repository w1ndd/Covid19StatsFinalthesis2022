import React from "react"
import CountryStatsPieChart from "../components/CountryStatsPieChart"
import VaccinatedNumber from "../components/VaccinatedNumber"
import useFetch from "../hooks/useFetch"

export default function CountryStats(props){

    const {data, loading, error} = useFetch("https://corona.lmao.ninja/v2/countries/" + props.country + "?yesterday&strict&query%20")

    if(error) return "error"

    var date = new Date(0)
    date.setUTCMilliseconds(data?.updated)

    if(loading){
      return(
        <div>
          Üleslaadimine...
        </div>
      )
    } else {
    return (
      <>
      <hr/>
      <div className="container-pie-chart">
        <div className="pie-chart-stats">
        <ul>
        <li key={date}>
            Uuendatud: {date.toLocaleString()}
          </li>
          <li key={data.updated}>
          Juhtumeid kokku: {data.cases.toLocaleString()}
          </li>
          <li key={data?.todayCases}>
            Juhtumeid täna: {data?.todayCases.toLocaleString()}
          </li>
          <li key={data?.deaths}>
            Surnud kokku: {data?.deaths.toLocaleString()}
          </li>
          <li key={data?.todayDeaths}>
            Surnud täna: {data?.todayDeaths.toLocaleString()}
          </li>
          <li key={data?.recovered}>
            Tervenenud kokku: {data?.recovered.toLocaleString()}
          </li>
          <li key={data?.todayRecovered}>
          Tervenenud täna: {data?.todayRecovered.toLocaleString()}
          </li>
          <li key={data?.active}>
            Praegu haigeid: {data?.active.toLocaleString()}
          </li>
          <li key={data?.casesPerOneMillion}>
            Juhtumeid 1 000 000 inimeste kohta: {data?.casesPerOneMillion.toLocaleString()}
          </li>
          <li key={data?.deathsPerOneMillion}>
          Surnud 1 000 000 inimeste kohta: {data?.deathsPerOneMillion.toLocaleString()}
          </li>
          <li key={data?.tests}>
            Teste tehtud kokku: {data?.tests.toLocaleString()}
          </li>
          <VaccinatedNumber country={props.country} countryISO2={props.countryISO2}/>
        </ul>
        </div>
          <CountryStatsPieChart deaths={data?.deaths} cases={data?.cases} recovered={data?.recovered}/>
        </div>
      </>
    );
  }
}