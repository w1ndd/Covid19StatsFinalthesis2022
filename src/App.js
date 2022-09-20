import React from "react";
import './styles/styles.css'
import { Routes, Link, Route } from "react-router-dom";
import Page from "./routes/Page";
import Compare from "./routes/Compare"
import Home from "./routes/Home"
import World from "./routes/World"

export default function App() {
    return (
      <>
      <header>
        <div className="links-container">
        <Link to="/" className="link">Esileht </Link>
        <Link to="/Compare" className="link">Võrdle</Link>
        <Link to="/CountryStats" className="link">Riik</Link>
        <Link to="/WorldStats" className="link">Maailm</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Compare" element={<Compare />} />
        <Route path="/CountryStats" element={<Page />} />
        <Route path="/WorldStats" element={<World />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      </>
    );
}

