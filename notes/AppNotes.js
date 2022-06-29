import React, {Component} from 'react'
import Table from './Table'

// creating the App component
// notice className (not class) -> coding in JS not HTML
class App extends Component {
    render() {
      return (
        <div className="container">
          <Table />
        </div>
      )
    }
  }
  
export default App