import React, { useState, useRef, } from "react";
import CompareTwoCountries from "../pages/CompareTwoCountries";

export default function Compare() {
    const [submit, setSubmit] = useState(false)
    const [countries, setCountries] = useState([])
    const inputRef = useRef();

    const submitHandler = (e) => {
      e.preventDefault();
      setSubmit(!submit)
      setCountries(inputRef.current.value.split(" "))
    };

    if(!submit){
        return (
          <>
            <div className="page-title">
              <h1>Võrdle kahe riigi statistikat</h1>
              <p>Sisestage kahe riigi nimed inglise keeles ja vajutage nuppu. Esimene sisenenud riik on 
                "peamine". Nimede vahel kasutage tühikuklahvi (Space bar). Näiteks: <b><i>Italy Germany</i></b></p>
            </div>
            <div className="div-input">
                <form onSubmit={submitHandler} className="form">
                    <input ref={inputRef} className="input" placeholder="Kahe riigi nimed (inglise keeles)"/>
                    <button type="submit" className="main-button">Otsi</button>
                </form>
            </div>
            </>
        )
    } else {
        return(
          <>
            <CompareTwoCountries countries={countries}/>
          </>
        )
    }
}