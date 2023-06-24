import { Link, useParams } from "react-router-dom";
import styles from "./SitPage.module.css";
import { HOME_URL } from "../../constants/url";
import { TicketContext } from "../ReservePage/ReservePage";
import React, { useContext, useEffect } from 'react';
import { useUserContext } from "../../contexts/UserContext";
import { useMovies } from "../../hooks/useMovies";
import { UpdateReserva } from "../../firebase/users-service";


export function SitPage() { 

    const minPrice = 1000;
    const maxPrice = 5000;
  
    const getRandomPrice = () => {
      const randomNumber = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
      return randomNumber;
    };
  
    const preciounitario = getRandomPrice();
    
   let preciototal = preciounitario*5;
   const ticket = useContext(TicketContext);
    let contador = ticket;
    let dbseats=[]
    let selectedseats=dbseats;
    function cancel(seatId){
        let a = selectedseats.indexOf(seatId);
        selectedseats.splice(a,1);
        updateSelectedSeats();
        document.getElementById(seatId).style.backgroundColor='rgb(36, 195, 36)';
        
    }

    function add(seatId){
        selectedseats.push(seatId);
        updateSelectedSeats();
        document.getElementById(seatId).style.backgroundColor='red';
    }

    function updateSelectedSeats(){

        let s="";
        selectedseats.sort();
        if (selectedseats!=null){
        for (let x of selectedseats){
                s += x + ',' + ' ';
              
        }
        document.getElementById('SelectedSeatID').innerHTML=s;
        document.getElementById('seatsInForm').value=s;}
    }

    function toggle(seatId) {
        let a = selectedseats.indexOf(seatId);
        
        if(a==-1 && contador !=0){
            add(seatId);
            contador --;
        }
        else if (a!=-1){
            cancel(seatId);
            contador++; 
        }
      }

    function restoreColor(seatId){
        let a = selectedseats.indexOf(seatId);
        if(a==-1){
            document.getElementById(seatId).style.backgroundColor='rgb(36, 195, 36)';
        }else{
            document.getElementById(seatId).style.backgroundColor='red';

        }
    }
    
    const rows = 4;
    const cols = 5;
  
    const squares = [];
  
    for (let i = 1; i <= rows * cols; i++) {
      squares.push(i); 
    }
    
    

    const duplicatedSquares = squares.map((square, index) => {
        if (selectedseats.includes(index+1)) {
          return (
            <div
              key={index + 1}
              className={styles.seatbox}
              id={index + 1}
              style={{ backgroundColor: 'red' }}
            >
              {square}
            </div>
          );
        } else {
          return (
            <div
              key={index + 1}
              className={styles.seatbox}
              id={index + 1}
              onMouseOver={() => {
                document.getElementById(index + 1).style.backgroundColor = 'orange';
              }}
              onMouseOut={() => restoreColor(index + 1)}
              onClick={() => toggle(index + 1)}
            >
              {square}
            </div>
          );
        }
      });
    
    const handleAñadir= async ()=>{
      let existe=false;
      user.reservas.map((peli)=>{
        if(peli.id==movie.id){
          existe=true;
        } 
      })

      if(existe==false) {
        await UpdateReserva(user.id, movie) 
      }
    }
    const { user } = useUserContext();
    const {movieId}=useParams();
    const { movie, getOneMovie}=useMovies();

    useEffect(()=>{
      getOneMovie(movieId)
  },[])

    return (

        
        <div className="container">
            

        <div className={styles.screen}>
            <h1>PANTALLA</h1>
        </div>

        <div>
            <div className={styles.box}>
                <div>
                
                {duplicatedSquares}

                </div>
            </div>
        </div>
        
        

            <div className={styles.leyenda}>
            <p>Verde: Disponible || Rojo: Reservado</p>
            <p>Asientos reservados: <span id="SelectedSeatID"></span></p>
            <p>Tickets disponibles: {ticket}</p>
            <input type="hidden" name="seatsInForm" id="seatsInForm" value=""/>
            <Link to={HOME_URL} className={styles.link}>
            <button className={styles.confirmar} onClick={handleAñadir}>Confirmar Selección <br /> Precio unitario ${preciounitario} <br /> Precio total ${preciototal}</button>
            </Link>
            </div>

        </div>
    );

    
  }
  