import React from "react";
import WorldData from "../pages/WorldData";
import WorldMap from "../pages/WorldMap";

export default function Home(){
    return(
        <>
        <div className="page-title">
            <h1>Maailma COVID-19 leviku statistika</h1>
        </div>
        <div className="App">
            <WorldMap />
        </div>
        </>
    )
}