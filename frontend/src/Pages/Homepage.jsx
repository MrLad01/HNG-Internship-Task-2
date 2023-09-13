import React from 'react'
import Home from './subpages/Home'
import Feature from './subpages/Feature'
import Footer from './subpages/Footer'

const Homepage = ({movies}) => (
    <>
        <Home movies={movies} />
        <Feature />
        <Footer />
    </>
)

export default Homepage
