import React from 'react'
import eachPainting from './eachPainting'

const Painting = props => {
  const allPaintings = this.props.paintings
  return (
    <div>
      {allPaintings.map(painting => (
        <eachPainting key={painting.id} likes={painting.likes}></eachPainting>
      ))}
    </div>
  )
}

export default Painting
