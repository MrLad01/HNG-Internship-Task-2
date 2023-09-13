import React from 'react'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'


import Home from './Pages/Homepage'
import { AuthContextProvider } from '../context/AuthContextProvider'




const App = () => {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route index element={<Home />} />
          {/* <Route path='/login' element={<Login />} /> */}
          {/* <Route path='/register' element={<Register />} /> */}
          {/* <Route path='/:last_name' element={<HomeComponent />} /> */}
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