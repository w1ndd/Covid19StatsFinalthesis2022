import React from "react"
import { isNegative } from "../hooks/isNegative"

export default function CompareTwoCountriesHTML(props) {
    let firstCountry = props.firstCountry
    let secondCountry = props.secondCountry
    return (
        <> <div className="compare-title"> <i><b>{props.countries[0]}</b></i> ja <i><b>{props.countries[1]}</b></i> üldise statistika võrdlemine </div>
      <div className="compare-countries-container">
        <div className="country-container-first">
          
          <ul>
            <li key={firstCountry?.cases}>
              Juhtumite arv kokku: <b>{firstCountry?.cases?.toLocaleString()}</b>
            </li>
            <li key={firstCountry?.todayCases}>
              Juhtumite arv täna: <b>{firstCountry?.todayCases?.toLocaleString()}</b>
            </li>
            <li key={firstCountry?.deaths}>
              Surnud inimeste arv: <b>{firstCountry?.deaths?.toLocaleString()}</b>
            </li>
            <li key="surnud%">
              Surnud <b>%</b>  juhtumite arvust: <b>{((firstCountry?.deaths / firstCountry?.cases) * 100).toLocaleString()}%</b>
            </li>
            <li key={firstCountry?.recovered}>
              Tervenenud inimeste arv kokku: <b>{firstCountry?.recovered?.toLocaleString()}</b>
            </li>
            <li key={firstCountry?.todayRecovered}>
              Tervenenud inimeste arv täna: <b>{firstCountry?.todayRecovered?.toLocaleString()}</b>
            </li>
            <li key={firstCountry?.active}>
              Praegu on haigeid: <b>{firstCountry?.active?.toLocaleString()}</b>
            </li>
            <li key={firstCountry?.casesPerOneMillion}>
              Juhtumite arv 1 000 000 inimeste kohta: <b>{firstCountry?.casesPerOneMillion?.toLocaleString()}</b>
            </li>
            <li key={firstCountry?.deathsPerOneMillion}>
              Surnud inimeste arv 1 000 000 inimeste kohta: <b>{firstCountry?.deathsPerOneMillion?.toLocaleString()}</b>
            </li>
            <li key={firstCountry?.tests}>
              Teste tehtud kokku: <b>{firstCountry?.tests?.toLocaleString()}</b>
            </li>
            <li key={firstCountry?.population}>
              Elanikkond: <b>{firstCountry?.population?.toLocaleString()}</b>
            </li>
            <li key={firstCountry?.cases / firstCountry?.population}>
              Juhtumite <b>%</b> elanikkonnast: <b>{((firstCountry?.cases / firstCountry?.population) * 100).toFixed(3).toLocaleString()}%</b>
            </li>
          </ul>
        </div>

        <div className="compare-stats">
          <ul>
            <li key={1} className={isNegative(firstCountry?.cases - secondCountry?.cases) ? "red" : "green"}>
              {(firstCountry?.cases - secondCountry?.cases).toLocaleString()}
            </li>
            <li key={3} className={isNegative(firstCountry?.todayCases - secondCountry?.todayCases) ? "red" : "green"}>
              {(firstCountry?.todayCases - secondCountry?.todayCases).toLocaleString()}
            </li>
            <li key={2} className={isNegative(firstCountry?.deaths - secondCountry?.deaths) ? "red" : "green"}>
              {(firstCountry?.deaths - secondCountry?.deaths).toLocaleString()}
            </li>
            <li key={22} className={isNegative(((firstCountry?.deaths / firstCountry?.cases) * 100) - ((secondCountry?.deaths / secondCountry?.cases) * 100)) ? "red" : "green"}>
              {(((firstCountry?.deaths / firstCountry?.cases) * 100) - ((secondCountry?.deaths / secondCountry?.cases) * 100)).toLocaleString()}%
            </li>
            <li key={4} className={isNegative(firstCountry?.recovered - secondCountry?.recovered) ? "red" : "green"}>
              {(firstCountry?.recovered - secondCountry?.recovered).toLocaleString()}
            </li>
            <li key={5} className={isNegative(firstCountry?.todayRecovered - secondCountry?.todayRecovered) ? "red" : "green"}>
              {(firstCountry?.todayRecovered - secondCountry?.todayRecovered).toLocaleString()}
            </li>
            <li key={6} className={isNegative(firstCountry?.active - secondCountry?.active) ? "red" : "green"}>
              {(firstCountry?.active - secondCountry?.active).toLocaleString()}
            </li>
            <li key={7} className={isNegative(firstCountry?.casesPerOneMillion - secondCountry?.casesPerOneMillion) ? "red" : "green"}>
              {(firstCountry?.casesPerOneMillion - secondCountry?.casesPerOneMillion).toLocaleString()}
            </li>
            <li key={8} className={isNegative(firstCountry?.deathsPerOneMillion - secondCountry?.deathsPerOneMillion) ? "red" : "green"}>
              {(firstCountry?.deathsPerOneMillion - secondCountry?.deathsPerOneMillion).toLocaleString()}
            </li>
            <li key={9} className={isNegative(firstCountry?.tests - secondCountry?.tests) ? "red" : "green"}>
              {(firstCountry?.tests - secondCountry?.tests).toLocaleString()}
            </li>
            <li key={10} className={isNegative(firstCountry?.population - secondCountry?.population) ? "red" : "green"}>
              {(firstCountry?.population - secondCountry?.population).toLocaleString()}
            </li>
            <li key={11} className={isNegative(((firstCountry?.cases / firstCountry?.population) * 100) - ((secondCountry?.cases / secondCountry?.population) * 100)) ? "red" : "green"}>
              {(((firstCountry?.cases / firstCountry?.population) * 100) - ((secondCountry?.cases / secondCountry?.population) * 100)).toFixed(3).toLocaleString()}%
            </li>
          </ul>
        </div>

        <div className="country-container-second">
          <ul>
            <li key={secondCountry?.cases}>
              Juhtumite arv kokku: <b>{secondCountry?.cases?.toLocaleString()}</b>
            </li>
            <li key={secondCountry?.todayCases}>
              Juhtumite arv täna: <b>{secondCountry?.todayCases?.toLocaleString()}</b>
            </li>
            <li key={secondCountry?.deaths}>
              Surnud inimeste arv: <b>{secondCountry?.deaths?.toLocaleString()}</b>
            </li>
            <li key="surnud%2">
              Surnud <b>%</b> juhtumite arvust: <b>{((secondCountry?.deaths / secondCountry?.cases) * 100).toLocaleString()}%</b>
            </li>
            <li key={secondCountry?.recovered}>
              Tervenenud inimeste arv kokku: <b>{secondCountry?.recovered?.toLocaleString()}</b>
            </li>
            <li key={secondCountry?.todayRecovered}>
              Tervenenud inimeste arv täna: <b>{secondCountry?.todayRecovered?.toLocaleString()} </b>
            </li>
            <li key={secondCountry?.active}>
              Praegu on haigeid: <b>{secondCountry?.active?.toLocaleString()}</b>
            </li>
            <li key={secondCountry?.casesPerOneMillion}>
              Juhtumite arv 1 000 000 inimeste kohta: <b>{secondCountry?.casesPerOneMillion?.toLocaleString()}</b>
            </li>
            <li key={secondCountry?.deathsPerOneMillion}>
             Surnud inimeste arv 1 000 000 inimeste kohta: <b>{secondCountry?.deathsPerOneMillion?.toLocaleString()}</b>
            </li>
            <li key={secondCountry?.tests}>
              Teste tehtud kokku: <b>{secondCountry?.tests?.toLocaleString()}</b>
            </li>
            <li key={secondCountry?.population}>
              Elanikkond: <b>{secondCountry?.population?.toLocaleString()}</b>
            </li>
            <li key={secondCountry?.cases / secondCountry?.population}>
              Juhtumite <b>%</b> elanikkonnast: <b>{((secondCountry?.cases / secondCountry?.population) * 100).toFixed(3).toLocaleString()}%</b>
            </li>
          </ul>
        </div>
      </div>
      </>
    )
}