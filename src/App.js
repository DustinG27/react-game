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
    const newScore = this.state.currentScore + 1;
    this.setState({
        currentScore: newScore,
        title: 'Keep Moving!'
    });
    
    if(newScore === 15){
      this.setState({message: 'Winner Winner Chicken Dinner!'})
      this.gameReset();
  } else {
      this.setState({
        highScore: newScore
      });
  } 
     
  };


 


  // assigning the states for later updating
  clickedBeer = id => {
    // tests if click function is connected
    // console.log(id)
    let clickedBeer = this.state.clickedBeer;
    // if statement will push id's into an array then check for multiples
    
    if (clickedBeer.indexOf(id) === -1) {
        this.handleIncrement();
        this.setState({clickedBeer : this.state.clickedBeer.concat(id)});
        }else{
            this.gameReset();
        };
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
