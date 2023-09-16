import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Main = () => {
    const id = useParams().id;

    if ( isNaN(id)){
      throw Error
    }

    
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
  return <div className='absolute inset-x-1/4  h-full w-1/2'>Loading...</div>;
}

const genre = movie.genres.map((e) => (
  <div>{e.name},</div> 
  ))

const companies = movie.production_companies.map((e) => (
  <div>{e.name}, </div>
))
const countries = movie.production_countries.map((e) => (
  <div>{e.name}, </div>
))

var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var monthOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var date = new Date(movie.release_date);
var year = date.getUTCFullYear();
var month = date.getMonth();
var day = date.getDay();

const release_date = daysOfTheWeek[day]+ ", " + monthOfTheYear[month] + " " + day + ", " + year



  return (
    <React.Fragment>
      <div className='absolute inset-x-1/4 w-2/3 my-10 xs:text-xs sm:text-sm md:text-base lg:text-lg'>
        <div id='movie-trailer'>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="poster" className='w-full xs:h-56 sm:h-64 md:h-72 lg:h-80 object-cover' />
        </div>
        <div id="movie-description">
            <div id="title" className='flex gap-4 mt-4 items-end'>
                <Link data-testid= "movie-title" className='font-bold xs:text-base sm:text-lg md:text-xl lg:text-2xl' to={movie.homepage} target='_blank' >{movie.original_title}</Link>
                <span className='flex gap-1 xs:text-xs sm:text-xs md:text-xs lg:text-sm -mt-2'>
                    Genres:
                    {genre}
                </span>
            </div>
            <div id="description" className='mt-2 flex gap-2' data-testid='movie-overview' ><p className='font-semibold'>Overview:</p> {movie.overview}</div>
            <span className='flex gap-2 mt-1'><p className='font-semibold'>Production Companies:</p> 
                <p className='flex'>{companies}</p>
            </span>
            <span className='flex gap-2'><p className='font-semibold'>Production Countries:</p> 
                <p className='flex'>{countries}</p>
            </span>
            <span data-testid='movie-release-date' className='flex gap-2'> <p className='font-semibold' >Release Date (UTC):</p> 
                <p>{release_date}</p>
            </span>
            <span data-testid='movie-runtime' className='flex gap-2'><p className='font-semibold'>Runtime:</p> 
                <p>{movie.runtime} minutes</p>
            </span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Main
