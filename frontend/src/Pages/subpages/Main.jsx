import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
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
