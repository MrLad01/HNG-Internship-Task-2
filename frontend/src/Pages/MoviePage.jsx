import React from 'react'
import Footer from './subpages/Footer'
import SideBar from './subpages/SideBar'
import Main from './subpages/Main'

const MoviePage = ({id}) => (
    <>
        <SideBar />
        <Main id={id} />
        <Footer />
    </>
)

export default MoviePage
