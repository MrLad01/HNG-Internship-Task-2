import React from 'react'
import {Link} from 'react-router-dom'


const Card = ({movies}) => {
  const card = movies.map((e) => (
      <div className=''>
      <Link to={`/i/movies/${e.id}`}>
        <div>
        <div>
            <span id="movie-type"></span>
            <span id="like-button"></span>
        </div>
        <img src= {`https://image.tmdb.org/t/p/original${e.poster_path}`} alt="poster image" className='w-80' />
        </div>
      <div className='description xs:w-32 sm:w-36 md:w-64 lg:w-80 mt-3 gap-1'>
        <p className='movie-title xs:text-md sm:text-lg md:text-xl lg:text-2xl font-bold' data-testid='movie-title'>{e.title}</p>
        <span id='production-details' className='text-md text-gray-400'>release date: {e.release_date}</span>
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
