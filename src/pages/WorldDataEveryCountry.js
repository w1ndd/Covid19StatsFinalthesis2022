import React from "react"

export default function WorldDataEveryCountry(props) {
    const dataToFilter = props.data.Countries
    dataToFilter.sort((a, b) => (a.TotalConfirmed < b.TotalConfirmed) ? 1 : -1)
    return(
        <table className="world-data-table">
            <tbody>
                <tr>
                    <th><b>Koht</b></th>
                    <th><b>Riik</b></th>
                    <th><b>Riigikood</b></th>
                    <th><b>Juhtumite arv</b></th>
                    <th><b>% Maailmast</b></th>
                    <th><b>Surmade arv</b></th>
                    <th><b>% Maailmast</b></th>
                </tr>
            {dataToFilter.map(function(object, i){
                return <tr key={i}>
                       <th>{i + 1}</th>
                       <th>{object.Country.toLocaleString()}</th>
                       <th>{object.CountryCode.toLocaleString()}</th>
                       <th>{object.TotalConfirmed.toLocaleString()}</th>
                       <th>{(object.TotalConfirmed / props.data.Global.TotalConfirmed * 100).toLocaleString()}%</th>
                       <th>{object.TotalDeaths.toLocaleString()}</th>
                       <th>{(object.TotalDeaths / props.data.Global.TotalDeaths * 100).toLocaleString()}%</th>
                    </tr>
                })}
            </tbody>
        </table>
    )
}