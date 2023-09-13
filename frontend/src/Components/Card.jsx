import React from 'react'

const Card = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div className='description'>
        <span id='production-details'></span>
        <p id='movie-title'></p>
        <div id='movie-ratings'>
            <span id='idmb-rating'>
                <img src="" alt="" />
            </span>
            <span id='rotten-tomato'>
                <img src="" alt="" />
            </span>
        </div>
        <span id='movie-genre'></span>
      </div>
    </div>
  )
}

export default Card
