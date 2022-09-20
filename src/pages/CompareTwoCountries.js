import React, { useState, useEffect }  from "react"
import CompareTwoCountriesHTML from "./CompareTwoCountriesHTML";

export default function CompareTwoCountries(props){
  const [firstCountry, setFirstCountry] = useState({})
  const [secondCountry, setSecondCountry] = useState({})
    const country1 = "https://corona.lmao.ninja/v2/countries/" + props.countries[0]
    const country2 = "https://corona.lmao.ninja/v2/countries/" + props.countries[1]

    useEffect(()=>{
      Promise.all([
          fetch(country1),
          fetch(country2)
      ]).then(function (responses) {
          // Get a JSON object from each of the responses
          return Promise.all(responses.map(function (response) {
              return response.json();
          }));
      }).then(function (data) {
          console.log(data);
          setFirstCountry(data[0])
          setSecondCountry(data[1])
      }).catch(function (error) {
          console.log(error);
      });
      },[])
    return (
      <>
        <CompareTwoCountriesHTML countries={props.countries} firstCountry={firstCountry} secondCountry={secondCountry}/>
      </>
    );
}