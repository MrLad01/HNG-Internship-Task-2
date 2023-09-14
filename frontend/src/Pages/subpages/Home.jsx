import React, { useEffect, useState } from 'react'
import movieboxLogo from '../../assets/tv.png'
import menu from '../../assets/Menu.png'
import { Link } from 'react-router-dom'
import play from "../../assets/PlayIcon.png"



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
                id: movie.id
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
    }
  }, [movies, randomImageInfo]); 

    return (
        <React.Fragment>
            <div className='h-screen w-full bg-cover bg-center text-white' style={{backgroundImage:`url(${randomImageInfo?.backdropUrl})`}} >
                 <div className="container w-full h-full xs:mx-1 xs:pt-1 sm:mx-3 sm:pt-1 md:mx-4 md:pt-2 lg:mx-7 lg:pt-3 xl:mx-9 xl:pt-4 2xl:mx-12 2xl:pt-6 items-start" >
                    <img src="" alt="" />
                    <nav className='flex w-full justify-between'>
                        <Link className='logo flex items-center' to='/'>
                            <img src={movieboxLogo} alt="logo" className='mr-4  xs:ml-1 sm:ml-2' />
                            <p>MovieBox</p>
                        </Link>
                        <div id='search-bar'>
                        <input type="text" placeholder='What do you want to watch?' />
                            {/* search-icon */}
                        </div>
                        <div className='flex items-center'>
                            <a href="">Sign In</a>
                            <img src={menu} alt="menu" className='ml-5 xs:ml-1 sm:ml-2' />
                        </div>
                    </nav>
                    <section>
                        <p>

                        </p>
                        <p id="title">{randomImageInfo?.title}</p>
                        <div className="movie-ratings">
                            <div className="imdb-rating">
                                <img src="" alt="imdb logo" />
                            </div>
                            <div className="rotten-tomatoes-rating">
                                <img src="" alt="rotten tomato logo" />
                            </div>
                        </div>
                        <p className="movie-description">
                            {randomImageInfo?.overview}
                        </p>
                        <a href={`/i/movies/${randomImageInfo?.id}`}>
                            <button className='bg-rose-700 flex text-white items-center md:px-4 lg:px-4 xl:px-6 2xl:px-7  md:py-3 lg:py-3 xl:py-4 2xl:py-5 md:rounded-lg'>
                                <img src={play} alt="" className='mr-2' />
                                SEE MORE
                            </button>
                        </a>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
