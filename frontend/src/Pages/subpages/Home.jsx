import React from 'react'

const Home = ({movies}) => (
    <React.Fragment>
        <nav>
            <div className='logo'>
                <img src="" alt="logo" />
                <p></p>
            </div>
            <div id='search-bar'>
                <input type="text" placeholder='What do you want to watch?' />
                {/* search-icon */}
            </div>
            <div>
                <a href="">Sign In</a>
                {/* hamburger */}
            </div>
        </nav>
        <section>
            {movies}
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
    </React.Fragment>
)

export default Home
