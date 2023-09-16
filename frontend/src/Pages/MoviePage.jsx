import React from 'react'
import Footer from './subpages/Footer'
import SideBar from './subpages/SideBar'
import Main from './subpages/Main'

const MoviePage = () => (
    <>
        <div className="h-full w-screen">
            <SideBar />
            <Main  />
        {/* <div className="absolute bottom-0 inset-x-1/3">
            <Footer />
             </div> */}
        </div>
    </>
)

export default MoviePage
