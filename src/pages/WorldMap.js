import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import { scaleLinear } from "d3-scale";
import WorldDataEveryCountry from "./WorldDataEveryCountry";
import WorldData from "./WorldData";
import WorldData2 from "./WorldData2";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";



const colorScale = scaleLinear()
.domain([0, 1_000_000, 20_000_000], [])
.range(["#ffd6b7", "#ff6f00", "#d60000"]);


export default function WorldMap(){
    const [worldwideData, setWorldwideData] = useState({})
    const [loaded, setLoaded] = useState(false);
    const {data, loading, error}  = useFetch("https://api.covid19api.com/summary");
    
    const [position, setPosition] = useState({coordinates:[0, 0], zoom: 1})
    
    if(error) console.log(error)

    useEffect(() => {
        if(!loading){
            setLoaded(true)
        }
    });

    const handleMoveEnd = (position) => {
        setPosition(position)
    }

    if(!loaded){
        return <div>Üleslaadimine...</div>
    } else {
        return(
            <>
            <div className="container-world-map">
                <div className="map-text">COVID-19 statistika (juhtumite arv) maailmakaardil. Uuendatud: {data.Global.Date}</div>
                <ComposableMap width={1500} height={400}
                    projectionConfig={{ rotate: [-10, 0, 0 ], scale: 147}}>
                        {
                            <><Sphere stroke="#000"/>
                                <Graticule stroke="#000"/>
                                <Geographies geography={geoUrl}>
                                    {({geographies}) =>
                                    geographies.map((geo, index) => {
                                        const countryNames = data.Countries.find((a) => a.CountryCode === geo.properties.ISO_A2)
                                        return(
                                            <Geography key={index} 
                                            geography={geo} 
                                            fill={countryNames ? colorScale(countryNames.TotalConfirmed) : '#ffffff'}/>)})}
                                </Geographies></>
                        }
                </ComposableMap>
            </div>
            <hr/>
            <WorldData2 />
            <hr/>
            <WorldDataEveryCountry data={data} />
            </>
        )
    }
}