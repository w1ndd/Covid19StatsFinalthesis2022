import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import PieChart from '../components/charts/PieChart'
import WorldData from './WorldData'

export default function WorldData2(){
    const [worldwideData, setWorldwideData] = useState({})
    const [loaded, setLoaded] = useState(false);
    const {data, loading, error}  = useFetch("https://disease.sh/v3/covid-19/all");
    useEffect(() => {
        if(!loading && !loaded && !error){
            setWorldwideData({
                labels: ["Juhtumid", "Surnud", "Tervenenud"],
                datasets: [
                  {
                    label: "Number of cases",
                    data: [data?.cases, data?.deaths, data?.recovered],
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
    if(error) return <WorldData />

    if(!loaded){
        return <div>Üleslaadimine...</div>
    } else {
        var date = new Date(0)
        date.setUTCMilliseconds(data.updated)
        return(
            <>
            <div className="container-pie-chart">
                <div className="pie-chart-stats">
                    <ul>
                        <li>
                        Juhtumeid kokku: <b>{data?.cases.toLocaleString()}</b>
                        </li>
                        <li>
                        Juhtumeid täna: <b>{data?.todayCases.toLocaleString()}</b>
                        </li>
                        <li>
                        Surnud kokku: <b>{data?.deaths.toLocaleString()}</b>
                        </li>
                        <li>
                        Surnud täna: <b>{data?.todayDeaths.toLocaleString()}</b>
                        </li>
                        <li>
                        Tervenenud kokku: <b>{data?.recovered.toLocaleString()}</b>
                        </li>
                        <li>
                        Tervenenud täna: <b>{data?.todayRecovered.toLocaleString()}</b>
                        </li>
                        <li>
                        Tehtud teste kokku: <b>{data?.tests.toLocaleString()}</b>
                        </li>
                        <li>
                        Andmed uuendatud: <b>{date.toLocaleString()}</b>
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