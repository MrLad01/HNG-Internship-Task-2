import React from 'react'
import {Link} from 'react-router-dom'


const Card = ({movies}) => {
  const card = movies.map((e) => (
      <div className='grid grid-cols-3'>
      <Link data-testid='movie-card' to={`/i/movies/${e.id}`}>
        <div>
        <div>
            <span id="movie-type"></span>
            <span id="like-button"></span>
        </div>
        <img src={e.poster_path} alt="poster image" />
        </div>
      <div className='description'>
        <p className='movie-title' data-testid='movie-title'>{e.title}</p>
        <span id='production-details'>release date: {e.release_date}</span>
        <div className='movie-ratings'>
          {/* star */}
          {e.vote_average}
        </div>
        <span id='movie-genre'></span>
        </div>
      </Link>
    </div>
    )
  )

  return ( card )
}

export default Card
