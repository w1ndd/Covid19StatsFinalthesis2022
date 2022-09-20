import React, { useState, useRef, useEffect } from "react";
import GraphData from "./GraphData"
import CountryMainPage from "./CountryMainPage";

export default function MainBody() {
    const [submit, setSubmit] = useState(false)
    const inputRef = useRef();

    const submitHandler = (e) => {
      e.preventDefault();
      setSubmit(!submit)
    };

    if(!submit){
        return (
            <div className="div-input">
                <form onSubmit={submitHandler} className="form">
                    <input ref={inputRef} className="input" placeholder="Riigi nimi (inglise keeles)"/>
                    <button type="submit" className="main-button">Otsi</button>
                </form>
            </div>
        )
    } else {
        return(
          <>
            <div>
                <CountryMainPage country={inputRef.current.value} />
            </div>
          </>
        )
    }
}