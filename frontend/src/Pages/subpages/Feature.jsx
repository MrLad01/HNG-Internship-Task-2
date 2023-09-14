import React from 'react'
import Card from '../../Components/Card'
import { Link } from 'react-router-dom'

const Feature = ({movies}) => {
    return (
        <React.Fragment>
            <div id="head">
                <header>Featured Movie</header>
                <Link>See more</Link>
            </div>
            <div>
                <Card movies={movies} data-testid='movie-card' />
            </div>
        </React.Fragment>
    )
}

export default Feature
