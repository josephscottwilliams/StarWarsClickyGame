import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Nav from './components/Nav';
import characters from "./characters.json";


class App extends React.Component {

  state = {
    score: 0,
    highScore: 0,
    clickedItems: [],
    characters: characters
  }

  shuffleCards = (id) =>{
    
      for (var i = id.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = id[i];
          id[i] = id[j];
          id[j] = temp;
      }
      
    // if(this.clickedItems.includes(id)){
    //   //game over
    //   //else{score++
      
    // }
  //   console.log(id);
  //   this.setState({
  //     score:this.state.score + 1,
  //     highScore:this.state.highScore + 1,
  //     clickedItems: [...this.state.clickedItems, id]
      
  //   })
  // console.log(this.state.clickedItems);
    return id;

  }

  displayNewOrder = () =>{
    this.setState({
      characters: this.shuffleCards(characters)

    })
  }


  render() {
    const images = [];

    return (
      <div className="App">
          <Nav 
          score={this.state.score}
          highScore={this.state.highScore}
          />
          <Header />
        {characters.map(characters => 
        <Card
          id={characters.id}
          key={characters.id}
          image={characters.image}
          click={this.displayNewOrder}
        />)}
      </div>
    );
    
  }
}




export default App;
