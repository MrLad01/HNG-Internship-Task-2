import React from 'react'
import {Link} from 'react-router-dom'

const Card = () => {
  return (
    <Link>
      <div data-testid='movie-card'>
        <div>
            <span id="movie-type"></span>
            <span id="like-button"></span>
        </div>
        <img src="" alt="" />
      </div>
      <div className='description'>
        <span id='production-details'></span>
        <p className='movie-title' data-testid='movie-title'></p>
        <div className='movie-ratings'>
            <span className='idmb-rating'>
                <img src="" alt="idmb logo" />
            </span>
            <span className='rotten-tomato'>
                <img src="" alt="rotten tomato logo" />
            </span>
        </div>
        <span id='movie-genre'></span>
      </div>
    </Link>
  )
}

export default Card
