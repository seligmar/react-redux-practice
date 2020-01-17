import React from 'react'

class EachPainting extends React.Component {
  state = {
    color: 'white'
  }

  changeStyle = () => {
    this.setState({ color: 'red' })
  }

  render () {
    return (
      <div className='imgCard'>
        <img src={this.props.image} alt={this.props.title} />
        <p>{this.props.title}</p>
        <p>Artist:{this.props.artist.name}</p>
        <button
          className='like-btn'
          // onClick={this.changeStyle} upvote!
        >
          {this.props.likes}
        </button>
        <button className={this.state.color} onClick={this.changeStyle}>
          {this.props.likes} ♡
        </button>
        <button
          className='like-btn'
          // onClick={this.changeStyle} delete!
        >
          Delete
        </button>
      </div>
    )
  }
}

// on clidk the class of the like button should change to 'liked'

export default EachPainting
