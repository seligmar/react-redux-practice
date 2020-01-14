import React from 'react'

const EachPainting = props => {
  return (
    <div>
      <img src={props.image} />
      <p>{props.title}</p>
      <button>{props.likes}</button>
    </div>
  )
}

export default EachPainting
