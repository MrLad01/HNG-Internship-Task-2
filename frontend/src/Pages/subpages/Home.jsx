import React from 'react'
import movieboxLogo from '../../assets/tv.png'
import menu from '../../assets/Menu.png'
import { Link } from 'react-router-dom'

const Home = ({movies}) => {
    
    const word = movies.map((e) => e.id)

    return (
        <React.Fragment>
            <div className="container w-full h-full xs:mx-1 xs:pt-1 sm:mx-3 sm:pt-1 md:mx-4 md:pt-2 lg:mx-7 lg:pt-3 xl:mx-9 xl:pt-4 2xl:mx-12 2xl:pt-6 items-start">
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
                        e

                    </p>
                    <p id="title"></p>
                    <div className="movie-ratings">
                        <div className="imdb-rating">
                            <img src="" alt="imdb logo" />
                        </div>
                        <div className="rotten-tomatoes-rating">
                            <img src="" alt="rotten tomato logo" />
                        </div>
                    </div>
                    <p className="movie-description"></p>
                    <button>
                        {/* play icon */}
                        WATCH TRAILER
                    </button>
                </section>
            </div>
        </React.Fragment>
    )
}

export default Home
