import React, { useEffect, useState } from 'react'
import movieboxLogo from '../../assets/tv.png'
import menu from '../../assets/Menu.png'
import { Link } from 'react-router-dom'
import play from "../../assets/PlayIcon.png"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Home = ({movies}) => {

    const [randomImageInfo, setRandomImageInfo] = useState(null);
   
  useEffect(() => {
    if (!randomImageInfo && movies && movies.length > 0) {
        const fetchRandomImageWithOverview = async () => {
            try{
              const movieBackdrops = await movies.map(movie => ({
                backdropUrl: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
                overview: movie.overview,
                title: movie.original_title,
                id: movie.id,
                ratings: movie.vote_average
              }));
        
              // Choose a random movie backdrop
              
              if (movieBackdrops.length === 0) {
                  console.error('No movie backdrops available.');
                  return;
                }
                
            const randomBackdropInfo = movieBackdrops[Math.floor(Math.random() * movieBackdrops.length)];


              console.log('Random backdrop info:', randomBackdropInfo);

              if (movieBackdrops.length === 0) {
                console.error('No movie backdrops available.');
                return;
              }
        
              // Update state with the random image and its metadata
              setRandomImageInfo(randomBackdropInfo);
            } catch (error) {
              console.error('Error fetching TMDb data:', error);
            }
          }
        
          fetchRandomImageWithOverview();

             // Set up an interval to fetch a new random image every 5 seconds
            const intervalId = setInterval(() => {
                fetchRandomImageWithOverview();
            }, 5000); // 5 seconds in milliseconds
        
            // Cleanup the interval when the component unmounts
            return () => {
                clearInterval(intervalId);
            };
            }
  }, [movies, randomImageInfo]); 

    return (
        <React.Fragment>
            <div className='h-screen w-full bg-cover bg-center text-white' style={{backgroundImage:`url(${randomImageInfo?.backdropUrl})`}} >
                 <div className="container w-full h-full xs:mx-1 xs:pt-1 sm:mx-3 sm:pt-1 md:mx-4 md:pt-2 lg:mx-7 lg:pt-3 xl:mx-9 xl:pt-4 2xl:mx-12 2xl:pt-6 items-start" >
                    <nav className='flex md:w-full w-full justify-between items-center'>
                        <Link className='logo flex items-center' to='/'>
                            <img src={movieboxLogo} alt="logo" className='mr-4 xs:ml-1 sm:ml-2' />
                            <p className='xs:text sm:text-base md:text-xl lg:text-2xl font-bold'>MovieBox</p>
                        </Link>
                        <div id='search-bar flex items-center'>
                        <input type="text" placeholder='What do you want to watch?' className='text-white bg-transparent border-2 rounded-lg p-1 border-white placeholder:text-white indent-1 outline-none xs:w-40 sm:w-48 md:w-72 lg:w-96' />
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{color: "#ffffff",}} className=' md:-ml-6 lg:-ml-6' />
                        </div>
                        <div className='flex items-center'>
                            <a href="" className='text-base font-semibold'>Sign In</a>
                            <img src={menu} alt="menu" className='ml-5 xs:ml-1 sm:ml-2' />
                        </div>
                    </nav>
                    <section className='xs:64 sm:w-72 md:w-80 lg:w-96 xs:mt-8 sm:mt-12 md:mt-16 lg:mt-20'>
                        <p id="title" className='xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold lg:my-auto'>{randomImageInfo?.title}</p>
                        <div className="movie-ratings items-center flex">
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#ffffff",}} className='mr-1 lg:my-2' />
                        <p id="ratings">{randomImageInfo?.ratings}</p> 
                        </div>
                        <p className="movie-description xs:text-xs sm:text-sm md:text-base lg:text-lg line-clamp-4 mb-3">
                            {randomImageInfo?.overview}
                        </p>
                        <Link href={`/i/movies/${randomImageInfo?.id}`}>
                            <button className='bg-rose-700 flex text-white items-center md:px-4 lg:px-4 xl:px-6 2xl:px-7  md:py-3 lg:py-3 xl:py-4 2xl:py-5 md:rounded-lg'>
                                <img src={play} alt="" className='mr-2' />
                                SEE MORE
                            </button>
                        </Link>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
