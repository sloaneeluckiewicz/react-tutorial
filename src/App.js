import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

// commented out for state example -- uncomment out to see prop example
// creating the App component
// notice className (not class) -> coding in JS not HTML
/*
class App extends Component {
    render() {
      // creating a prop
      // put data in array of objects
      const characters = [
        {
          name: 'Janet',
          job: 'Barista',
        },
        {
          name: 'Gary',
          job: 'Truck Driver',
        },
        {
          name: 'Gladys',
          job: 'Housekeeper',
        },
        {
          name: 'Robert',
          job: 'Business Owner'
        }
      ]

      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
      )
    }
  }
*/

  //creating a state
  class App extends Component {
    state= {
      characters: [],
    };
  

      removeCharacter = index => {
        // retrieveing the state
        const {characters} = this.state;
        
        //modifying the array
        this.setState({
          //filter creates a new array by filtering out or in new items
          characters: characters.filter((character, i) => {
            // this method tests an index vs all the indicies in the array 
            // and returns all but the one that is passed through
            return i !== index;
          })
          
        });
    }

    handleSubmit = character => {
      this.setState({characters: [...this.state.characters, character]});
    }

      render() {
        const {characters} = this.state

        return (
          <div className= "container">
            <Table characterData={characters} 
            removeCharacter={this.removeCharacter} 
            />
            <Form handleSubmit={this.handleSubmit} />
          </div>
        );
  }
}



export default App;