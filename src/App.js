import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from "./components/Counter";
import characters from "./characters.json";


class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };

  randomizeImages = (id) => {
    console.log("This has been clicked!")
    console.log(id)
  }

  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    return (
      <Wrapper>
        <Title>Star Wars Clicky Game</Title>
        <Counter />
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            name={character.name}
            image={character.image}
            randomizeImages={() => this.randomizeImages(character.id)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
