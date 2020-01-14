import React from 'react'
import EachPainting from './eachPainting'

const Painting = props => {
  const allPaintings = props.paintings
  return (
    <div>
      {allPaintings.map(painting => (
        <EachPainting
          key={painting.id}
          image={painting.image}
          likes={painting.votes}
          title={painting.title}
        ></EachPainting>
      ))}
    </div>
  )
}

export default Painting

// ♥  use this icon when likes increase
