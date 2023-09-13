import React from 'react'

const Card = () => {
  return (
    <div>
      <div>
        <div>
            <span id="movie-type"></span>
            <span id="like-button"></span>
        </div>
        <img src="" alt="" />
      </div>
      <div className='description'>
        <span id='production-details'></span>
        <p className='movie-title'></p>
        <div className='movie-ratings'>
            <span className='idmb-rating'>
                <img src="" alt="" />
            </span>
            <span className='rotten-tomato'>
                <img src="" alt="" />
            </span>
        </div>
        <span id='movie-genre'></span>
      </div>
    </div>
  )
}

export default Card
