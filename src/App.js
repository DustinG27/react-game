import React, { Component } from "react";
import BeerCard from "./components/BeerCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import beers from "./beers.json";

// function to shuffle and return array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // Setting state to beers.json and other global variables
  state = {
    beers,
    title: "Click any beer you'd like!",
    currentScore: 0,
    highScore: 0,
    clickedBeer: []
  };

   //shuffle the list on each click
   shuffleArray = () => {
    this.setState({ beers: shuffle(beers) });
  };

   // handles game reset
   gameReset = () => {
    this.setState({
      title: "Oops, try again.",
      currentScore: 0,
      highScore: this.state.highScore,
      clickedBeer: []
    });
    this.shuffleArray();
  }

  // increases the state.score to +1
  handleIncrement = () => {
    this.setState({
        currentScore: this.state.currentScore + 1,
        title: 'Keep Moving!'
    });
  };

 


  // assigning the states for later updating
  clickedBeer = id => {
    let clickedBeer = this.state.clickedBeer;
    let currentScore = this.state.currentScore;
    let highScore = this.state.highScore;

    // if the clicked image has an id of the indexed paintings
    if (clickedBeer.indexOf(id) === -1) {
      // push that id into that id into the array to be stored
      clickedBeer.push(id);
      console.log(clickedBeer);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.shuffleArray();
    } else if (this.state.currentScore === 15) {
      // alert player wins
      this.setState({
        currentScore: 0,
        clickedBeer: [],
        title: "You win!"
      });
    } else {
        console.log("game reset")
       this.gameReset();
    }

    if (currentScore > highScore) {
      this.setState({
        highScore: currentScore
      });
    }
  };

   

 

  render() {
    return (
      <Wrapper>
        <Header
        title={this.state.title}
        currentScore={this.state.currentScore}
        highScore={this.state.highScore}
        />
        {this.state.beers.map(beer => (
          <BeerCard
            clickedBeer={this.clickedBeer}
            id={beer.id}
            key={beer.id}
            name={beer.name}
            image={beer.image}
            style={beer.style}
            notes={beer.notes}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
