import React from 'react'
import Card from '../../Components/Card'
import { Link } from 'react-router-dom'

const Feature = ({movies}) => {
    return (
        <React.Fragment>
            <div id="head" className='flex justify-between mx-20 my-10 items-end'>
                <header className='xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Featured Movies</header>
                <Link className='text-rose-700 lg:-ml-30'>See more</Link>
            </div>
            <div className='grid grid-cols-3 xs:mx-5 sm:mx-10 mx-20 gap-10 '>
                <Card movies={movies} data-testid='movie-card' />
            </div>
        </React.Fragment>
    )
}

export default Feature
