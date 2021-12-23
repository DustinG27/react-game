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
    currentScore: 0,
    highScore: 0,
    clickedBeer: []
  };

  // assigning the states for later updating
  clickedBeer = id => {
    // tests if click function is connected
    // console.log(id)
    // setting open variables for manipulation
    let clickedBeer = this.state.clickedBeer;
    let currentScore = this.state.currentScore;
    let highScore = this.state.highScore;
  
    // if statement will push id's into an array then check for multiples
    // the array then resets
    if (clickedBeer.indexOf(id) === -1) {
      // pushes selected id's into the clickedBeer array
      clickedBeer.push(id);
      console.log(clickedBeer);
      // on success add 1 to current score
      this.handleIncrement();
      // this.shuffleArray();
    } else if (this.state.currentScore === 15) {
      this.setState({
        currentScore: 0,
        highScore: +1 ,
        clickedBeer: []
      });
    } else {
      this.setState({
        score: 0,
        clickedBeer: []
      });
    };

  };

   // increases the state.score to +1
   handleIncrement = () => {
    this.setState({ currentScore: this.state.currentScore +1});
  };

  //shuffle the list on each click
  shuffleArray = () => {
    this.setState({ beers: shuffle(beers) });
  };


  render() {
    return (
      <Wrapper>
        <Header
        title="mmm beer"
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
