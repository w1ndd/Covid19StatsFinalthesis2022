import React from "react";
import { Routes, Link, Route } from "react-router-dom";

export default function Home(){
    return(
        <>
        <div className="page-title">
            <h1>Esileht</h1>
        </div>
        <div className="homepage-text">
           Tere tulemast vebirakendusele COVID-19 leviku statistikaga! <br/> 
           Sellel vebirakendusel võite vaadata konkreetse riigi statistikat, <br/>
           võrrelda kahe riigi statistikat ja näha ka maailma statistika andmeid seotud koroonaviiruse levikuga. <br/>
        <div className="homepage-links">
            <Link to="/Compare" className="link">Võrdle</Link>  lehel on võimalik võrrelda kahe riigi statistikat.<br/> 
            <Link to="/CountryStats" className="link">Riik</Link>  lehel on võimalik vaadata põhjalikuma statistikat ja diagramme.<br/> 
            <Link to="/WorldStats" className="link">Maailm</Link>  lehel on võimalik vaadata statistikat seotud COVID-19 levikuga maailmas. 
            Lehel on ka maailmakaart ning tabel iga riigi üldise statistikaga.<br/> 
        </div>
        </div>

       
        </>
    )
}