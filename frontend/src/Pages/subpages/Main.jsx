import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Main = () => {
    const id = useParams();

    const [data, setData] = useState([]);
    useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2Y0NGVkM2NmMDUxOTU5NTNmNGIxY2M2NTE3YTQwNiIsInN1YiI6IjY1MDE5OGVlZmZjOWRlMGVkZWQ0YTZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GlUmMuFFtzAlyH8Zigpm4slmIw87yRHn3sWI35z1GIQ'
        }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=03f44ed3cf05195953f4b1cc6517a406`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(response => setData(response.results))
    .catch(err => console.error(err));
}, [data])

    const movie = data[0];
    console.log(movie);

  return (
    <React.Fragment>
      <div>
        <div id='movie-trailer'>
            <video src=""></video>
        </div>
        <div id="movie-description">
            <div id="title">
                <p></p>
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
