import React, { Component } from "react";

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(){
        fetch("https://corona.lmao.ninja/v2/countries/Estonia?yesterday&strict&query%20")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    
    render()  {
        const {error, isLoaded, items} = this.state;
        if(error){
            return <p> Error {error.message} </p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
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
                </ul>
            )
        }
    }

}