import React, { useState, useRef } from "react"
import GrapghData from "./GraphData";
import useFetch from "./useFetch";

export default function MainData() {

    const [items, setItems] = useState('');
    const [grapghData, setGraphData] = useState([]);
    const [rows, setRows] = useState([]);
    const inputRef = useRef();

    //const {data, loading, error} = useFetch(inputRef.current.value);

    const dataFrom1 = async () => {
        const response = await fetch(
          "https://corona.lmao.ninja/v2/countries/" +
            inputRef.current.value +
            "?yesterday&strict&query%20"
        )
          .then((res) => res.json())
          .catch((err) => {
            console.log(err);
          });
        setItems(response);
    };

    const dataFrom2 = async () => {
        const data = await fetch(
            "https://covid-api.mmediagroup.fr/v1/history?country=" +
              inputRef.current.value +
              "&status=confirmed"
        )
        .then((res) => res.json())
        .then((res) => res.All.dates)
        .catch((err) => {
            console.log(err);
        });

        var res = Object.keys(data).map(function (name) {
            var obj = {};
            obj[name] = data[name];
            return obj;
        });
        console.log(res)
        
        setGraphData(res);
        
    };


    const submitHandler = (e) => {
      e.preventDefault();

      setItems(dataFrom1);

      // setGraphData(dataFrom2);
      // console.log(grapghData)
      // setTimeout(() => {
      //   console.log(grapghData)
      //   var keys = Object.keys(grapghData)
      //   var values = Object.values(grapghData)
      //   let oldRows = grapghData;
      //   let rows = [];
      //   console.log(keys[0])
      //   for (var i; i < 10; i++) {
      //     rows.push(i);
      //       rows.push(<ObjectRow date={keys[i]} number={values[i]} />);
      //   }
      //   console.log(rows)
        
        
      //   setRows(rows)
      // }, 2000);
    };
    
    if(inputRef.current != null){
      console.log('123')
      return(
        <div className="App">
        <form onSubmit={submitHandler}>
            <input ref={inputRef} />
            <button type="submit">Submit</button>
          </form>
        <div >nubmers: <GrapghData country={inputRef.current.value} /> </div>
        </div>
      )
    } else {
      console.log(inputRef)
      console.log("213213213213")
    return (
        <div className="App">
          <form onSubmit={submitHandler}>
            <input ref={inputRef} />
            <button type="submit">Submit</button>
          </form>
          <ul>
                 <li key={items.country}>
                     Country: {items.country}
                 </li>
                 <li key={items.population}>
                     Population: {items.population}
                 </li>
                <li key={items.cases}>
                    Cases: {items.cases}
                 </li>
                 <li key={items.todayCases}>
                 Today cases: {items.todayCases}
                 </li>
                 <li key={items.deaths}>
                     Deaths: {items.deaths}
                 </li>
                 <li key={items.todayDeaths}>
                     Today deaths: {items.todayDeaths}
                 </li>
                 <li key={items.recovered}>
                      Recovered: {items.recovered}
                 </li>
                 <li key={items.todayRecovered}>
                     Today recovered: {items.todayRecovered}
                 </li>
                 <li key={items.tests}>
                     Tests done: {items.tests}
                 </li>
                 <li>
                     nubmers: 
                 </li>
             </ul>
             
        </div>
      );
    }
}
