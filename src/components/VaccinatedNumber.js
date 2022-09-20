import React from "react";
import useFetch from "../hooks/useFetch"

export default function VaccinatedNumber(props) {
    const {data, loading, error} = useFetch("https://covid-api.mmediagroup.fr/v1/vaccines")
    var countryStats;

    if(loading){
        return <></>
    } else {
        var countries = Object.values(data)
        var countryISO2 = props.countryISO2;

        countryStats = countries.filter(obj => {

            if(obj.All.abbreviation == countryISO2)
            return obj
        })
    }

    if(data){
        return(
            <>
            <li key={countryStats[0].All.population}>
            Elanikkond: {countryStats[0].All.population.toLocaleString()}
            </li>
            <li key={countryStats[0].All.people_vaccinated}>
            Vaktsineeritud: {countryStats[0].All.people_vaccinated.toLocaleString()}
            </li>
            <li key={countryStats[0].All.people_vaccinated}>
            Vaktsineeritud protsent: {((countryStats[0].All.people_vaccinated / countryStats[0].All.population) * 100).toFixed(3).toLocaleString()}%
            </li>
            </>
        )
    }
}

