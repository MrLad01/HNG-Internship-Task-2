import React, { useEffect, useState } from 'react'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements, useParams } from 'react-router-dom'

import Home from './Pages/Homepage'
import MoviePage from './Pages/MoviePage'





const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=03f44ed3cf05195953f4b1cc6517a406&page=1&primary_release_date.gte=2023&sort_by=popularity.desc&year=2023');
      if(response.ok){
        const data = await response.json();
        const film = data.slice(0, 9);
        setMovies(film)
      }
    }
    fetchMovies();
  })

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route index element={<Home movies={movies}/>} />
          <Route path="/i/movies" element={<MoviePage />} />
        </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}


export default App