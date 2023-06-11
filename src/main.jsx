import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './pages/Layout/Layout'
import { HOME_URL, REGISTER_URL, Reservar_URL } from './constants/url'
import { HomePage } from './pages/HomePage/HomePage'
import { MovieInfoPage } from './pages/MovieInfoPage/MovieInfoPage'
import { ReservePage } from './pages/ReservePage/ReservePage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}> 
        <Route path={HOME_URL} element={<HomePage/>}/>
        <Route path='*' element={<h1>Not Found</h1>} />
        <Route path={Reservar_URL} element={<ReservePage/>}/>
        <Route path='/movies/:movieId' element={<MovieInfoPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
