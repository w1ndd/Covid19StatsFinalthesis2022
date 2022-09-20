import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import PieChart from '../components/charts/PieChart'

export default function WorldData(){
    const [worldwideData, setWorldwideData] = useState({})
    const [loaded, setLoaded] = useState(false);
    const {data, loading, error}  = useFetch("https://covid-19.dataflowkit.com/v1/world");
    useEffect(() => {
        if(!loading && !loaded && !error){
            setWorldwideData({
                labels: ["Juhtumid", "Surnud", "Tervenenud"],
                datasets: [
                  {
                    label: "Number of cases",
                    data: [data?.["Total Cases_text"].split(",").join(""), data?.["Total Deaths_text"].split(",").join(""), data?.["Total Recovered_text"].split(",").join("")],
                    backgroundColor: ["#ff8e0a", "#e83b67", "#6385f4"],
                    borderColor: "black",
                    borderWidth: 1,
                  },
                ],
              },
            );
            setLoaded(true)
        }
    });
    if(error) return <div>Praegu API ei tööta</div>

    if(!loaded){
        return <div>Üleslaadimine...</div>
    } else {
        return(
            <>
            <div className="container-pie-chart">
                <div className="pie-chart-stats">
                    <ul>
                        <li>
                        Praegu: {data?.["Active Cases_text"]}
                        </li>
                        <li>
                        Juhtumeid täna: {data?.["New Cases_text"]}
                        </li>
                        <li>
                        Surnud täna: {data?.["New Deaths_text"]}
                        </li>
                        <li>
                        Juhtumeid kokku: {data?.["Total Cases_text"]}
                        </li>
                        <li>
                        Surnud kokku: {data?.["Total Deaths_text"]}
                        </li>
                        <li>
                        Tervenenud kokku: {data?.["Total Recovered_text"]}
                        </li>
                        <li>
                        Andmed uuendatud: {data?.["Last Update"]}
                        </li>
                    </ul>
                </div>
                <div className="pie-chart">
                    <div className="pie-chart-text">
                        Maailma COVID-19 statistika sektordiagramm
                    </div>
                    <PieChart chartData={worldwideData}/>
                </div>
            </div>
            </>
        )
    }
}