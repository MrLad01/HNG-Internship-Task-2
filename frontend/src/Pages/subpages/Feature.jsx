import React from 'react'
import Card from '../../Components/Card'
import { Link } from 'react-router-dom'

const Feature = () => (
    <React.Fragment>
        <div id="head">
            <header>Featured Movie</header>
            <Link>See more</Link>
        </div>
        <div>
            <Card />
        </div>
    </React.Fragment>
)

export default Feature
