import React from 'react'
import './appNew.css'
// import data from '../data'
import Painting from './components/painting'

class App extends React.Component {
  // state = {
  //   data: []
  // }

  // componentDidMount () {
  //   this.setState({ data })
  //   // imports paintings from data file
  // }

  render () {
    return (
      <div>
        <Painting>{/* // paintings={this.state.data}> */}</Painting>
      </div>
    )
  }
}

export default App
