import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Main = () => {
    const id = useParams().id;

    
const [movie, setMovie] = useState();
const [isLoading, setIsLoading] = useState(true);

const fetchMovie = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2Y0NGVkM2NmMDUxOTU5NTNmNGIxY2M2NTE3YTQwNiIsInN1YiI6IjY1MDE5OGVlZmZjOWRlMGVkZWQ0YTZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GlUmMuFFtzAlyH8Zigpm4slmIw87yRHn3sWI35z1GIQ'
    }
  };

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=03f44ed3cf05195953f4b1cc6517a406`, options);
    const movie = response.data;
    setMovie(movie);
    setIsLoading(false);
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  fetchMovie();
}, []);

if (isLoading) {
  return <div>Loading...</div>;
}


  console.log(movie);

  return (
    <React.Fragment>
      <div>
        <div id='movie-trailer'>
            <video src=""></video>
        </div>
        <div id="movie-description">
            <div id="title">
                <p>{movie.original_title}</p>
                <span>
                    {/* genre */}
                </span>
            </div>
            <div id="description"></div>
            <span>Director: 
                <p></p>
            </span>
            <span>Writers: 
                <p></p>
            </span>
            <span>Stars: 
                <p></p>
            </span>
            {/* look at api */}
        </div>
        <div id="more">
            <div id="movie-rating">
                {/* star */}
            </div>
            <button>
                {/* coupon */}
                See Showtimes
            </button>
            <button>
                {/* hamburger */}
                More watch options
            </button>
            <Link>
            <img src="" alt="The Best Movies and Shows in September" />
            </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Main
