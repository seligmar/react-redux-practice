import React from 'react'

const EachPainting = props => {
  return (
    <div className='imgCard'>
      <img src={props.image} />
      <p>{props.title}</p>
      <button className='likes'>{props.likes} ♡</button>
    </div>
  )
}

export default EachPainting
