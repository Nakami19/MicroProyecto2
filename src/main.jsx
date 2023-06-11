import { ReservePage } from './pages/ReservePage/ReservePage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout/Layout';
import {
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,
  PROFILE_URL,
  Reservar_URL,  
} from './constants/url';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MovieInfoPage } from './pages/MovieInfoPage/MovieInfoPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}> 
        <Route path={HOME_URL} element={<HomePage/>}/>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={Reservar_URL} element={<ReservePage/>}/>
        <Route path='/movies/:movieId' element={<MovieInfoPage/>}/>
        <Route
            path={LOGIN_URL}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
              }
          />
        <Route
            path={REGISTER_URL} 
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
        />
            <Route
            path={PROFILE_URL}
            element={
              <PrivateRoute>
                <h1>AYUDA </h1>
              </PrivateRoute>
            }
          />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
