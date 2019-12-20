import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from "./components/Counter";
import characters from "./characters.json";


class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    count:0,
    userChoice:[],
    topScore:0,
  };

  

  randomizeImages = id => {
    console.log("No." + id + " This has been clicked!");
    var randomCharacters = this.state.characters.sort(function(a, b){return 0.5 - Math.random()});
    if (this.state.userChoice.indexOf(id) === -1) {
      const currentCount = this.state.count;
      const currentChoice = this.state.userChoice;
      currentChoice.push(id);
      // Set this.state.friends equal to the new friends array
      this.setState({ count:currentCount+1, characters:randomCharacters, userChoice:currentChoice});
    } else {
      alert("Game Over!");
      const currentCount = this.state.count;
      if (currentCount > this.state.topScore) {
        this.setState({topScore:currentCount});
      }
      this.setState({count:0, userChoice:[],});
    }
    
  }

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <Wrapper>
        <Title>Star Wars Clicky Game</Title>
        <Counter 
        count={this.state.count}
        topScore={this.state.topScore}
        />
        <div className="container">
          <div className="row">
            {this.state.characters.map(character => (
              <CharacterCard
                id={character.id}
                name={character.name}
                image={character.image}
                randomizeImages={() => this.randomizeImages(character.id)}
              />
            ))}
          </div>
        </div>
      </Wrapper >
    );
  }
}

export default App;
