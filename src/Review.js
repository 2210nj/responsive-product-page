import React from 'react'
import './Review.css'

function Review({ id, title, image }) {
    return (
        <div className="section review">
        <div className="section-content" id={id}>
          <img src={image} alt="" className="image" />
          <h1>{title}</h1>
        </div>
      </div>
    )
}

export default Review
