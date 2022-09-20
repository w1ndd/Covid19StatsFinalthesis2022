import { useEffect, useState } from "react"
import PieChart from './charts/PieChart'

export default function CountryStatsPieChart(props){
    const [worldwideData, setWorldwideData] = useState({})
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if(props){
            setWorldwideData({
                labels: ["Juhtumid", "Surnud", "Tervenenud"],
                datasets: [
                  {
                    label: "Number of cases",
                    data: [props.cases, props.deaths, props.recovered],
                    backgroundColor: ["#ff8e0a", "#e83b67", "#6385f4"],
                    borderColor: "black",
                    borderWidth: 1,
                  },
                ],
              },
            );
            setLoaded(true)
        }
    }, []);

    if(!loaded){
        return <div>Loading...</div>
    } else {
        return(
            <>
                <div className="pie-chart">
                <div className="pie-chart-text">Riigi COVID-19 statistika sektordiagramm</div>
                    <PieChart chartData={worldwideData}/>
                </div>
            </>
        )
    }
}