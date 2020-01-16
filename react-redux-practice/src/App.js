import React from 'react'
import { connect } from 'react-redux'
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
    // this shows the props for this component, which is banana: "potatoe"
    // per the mapStateToProps function below. It works! Also provided is dispatch,
    // which is provided by connect
    console.log(this.props)
    return (
      <div>
        <Painting>{/* // paintings={this.state.data}> */}</Painting>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // this gets the state from the store and returns the props, which are objects
  // if we put () before the {} it will return an object
  // anything written in here will provide props to the component
  // banana: 'potatoe'
  paintings: state.paintings
})

export default connect(mapStateToProps /* , mapDispatchToProps */)(App)
