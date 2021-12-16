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

  clickedBeers = id => {

  }

  render() {
    return (
      <Wrapper>
        <Header></Header>
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
