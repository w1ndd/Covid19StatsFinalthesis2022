import React, { useState, useRef } from "react";
import MainBody from "../pages/MainBody";
import { Routes, Route, Link } from 'react-router-native'

export default function Page(){
    return(
        <>
        <div className="page-title">
            <h1>Ühe riigi põhjalik statistika</h1>
            <p>Sisestage üks riigi nimi inglise keeles ja vajutage nuppu. Näiteks: <b><i>Germany</i></b></p>
        </div>
        <div className="App">
            <MainBody />
        </div>
        </>
    )
}