import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor(){
        super();

        this.state ={
            cars: ['vette', 'camaro', 'bmw', 'prius', 'element'],
            userInput: '',
            filteredCars: []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val});
    }
    filterNames(userInput){
        var cars = this.state.cars;
        var filteredCars = [];
        for(var i=0;i<cars.length;i++){
            if(cars[i].includes( userInput ) ){
                console.log(cars[i]);
                filteredCars.push(cars[i]);
            }
        }
        console.log(filteredCars, 'zzzzz');
        this.setState({filteredCars: filteredCars});
    }

        render() {
            return (
                <div className="puzzleBox filterStringPB">
                    <h4>Filter String</h4>
                    <span className="puzzleText">Cars: { JSON.stringify(this.state.cars, null, 10)}</span>
                    <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                    <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput)}>Find it</button>
                    <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredCars, null, 10)}</span>
                </div>
            )
        }
    }
    

