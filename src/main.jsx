import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './pages/Layout/Layout'
import { HOME_URL } from './constants/url'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}> 
        <Route path={HOME_URL}/>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
