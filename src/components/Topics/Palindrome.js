import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super()

        this.state={
            userInput: '',
            palindrome: ''
        }
    }
    handleChange(val){
        this.setState({userInput: val});
    }
    isPalindrome(userInput){
        var forward = userInput;
        var backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');
        console.log(backwards);
        if(forward === backwards){
            console.log('yep')
            this.setState({ palindrome: 'true'});
        } else {
            console.log("nope")
            this.setState({ palindrome: 'false'});
        }
        console.log("iiiiiii", this.state.palindrome)
    }

        render() {
            return (
                <div className="puzzleBox filterStringPB">
                    <h4>Palindrome</h4>
                    <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                    <button className="confirmationButton" 
                    onClick = { ()=> this.isPalindrome(this.state.userInput)}>Test</button>
                    <span className="resultsBox">
                    Palindrome: {console.log("here", this.state.palindrome)}{ this.state.palindrome }</span>
                </div>
            )
        }
    }
    

