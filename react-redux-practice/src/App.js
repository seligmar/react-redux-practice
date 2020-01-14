import React from 'react'
import './App.css'
import data from './data'

class App extends React.Component {
  state = {
    data: []
  }

  componentDidMount () {
    this.setState({ data })
    // imports paintings from data file
  }

  render () {
    return <div>Does this work?</div>
  }
}

export default App
