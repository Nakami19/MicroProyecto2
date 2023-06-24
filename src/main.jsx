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
  SEATS_URL,
} from './constants/url';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MovieInfoPage } from './pages/MovieInfoPage/MovieInfoPage';
import { SitPage } from './pages/SitPage/SitPage';
import { UserPage } from './pages/UserPage/UserPage';
import { TicketProvider } from './pages/ReservePage/ReservePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}> 
        <Route path={HOME_URL} element={<HomePage/>}/>
        <Route path="*" element={<NotFoundPage />} />
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
                <UserPage />
              </PrivateRoute>
            }
          />

      
        <Route
        
            path='/seats/:movieId'
            element={
              <TicketProvider>
              <PrivateRoute>
                <ReservePage />
              </PrivateRoute>
              </TicketProvider>

            }
          />

        <Route
            path={'/seat/:movieId'}
            element={
              <TicketProvider>

              <PrivateRoute>
                <SitPage />
              </PrivateRoute>
              </TicketProvider>

            }
          />


      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
