import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor () {
        super();

        this.state={
            vehicles: [
                {
                    model: 'Corvette',
                    name: 'Ginger',
                    year: 1973,
                    doors: 2
                },
                {
                    model: 'BMW 325i',
                    name: 'Sigfried',
                    year: '2002',
                    doors: 4
                },
                {
                    model: 'Camaro',
                    name: 'MaryAnne',
                    year: 2012,
                    doors: 2
                },
                {
                    model: 'Harley Fatboy',
                    name: 'Gunnar',
                    year: 2001
                }
            ],
            userInput: '',
            filteredVehicles: []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val})
    }
    filterVehicles(prop) {
        console.log(prop);
        var vehicles = this.state.vehicles;
        var filteredVehicles = [];
        for(var i = 0; i<vehicles.length; i++){
            if(vehicles[i].hasOwnProperty(prop) ){
                filteredVehicles.push(vehicles[i]);
            }
        }
        this.setState({ filteredVehicles: filteredVehicles});
    }


        render() {
            return (
                <div className="puzzleBox filterObjectPB">
                    <h4>FilterObject</h4>
                    <span className="puzzleText">Original: { JSON.stringify(this.state.vehicles, null, 10) }</span>
                    <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                    <button className="confirmationButton" onClick={ () => this.filterVehicles(this.state.userInput)}>Do it</button>
                    <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredVehicles, null, 10)}</span>
                </div>
            )
        }
    }  
    

