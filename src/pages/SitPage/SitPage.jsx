import { Link } from "react-router-dom";
import styles from "./SitPage.module.css";
import { HOME_URL } from "../../constants/url";



export function SitPage() { 
    let contador = 4;
    let dbseats=[1,2,3]
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
            if (!dbseats.includes(x)) {
                s += x + ',' + ' ';
              }
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
            <p>Asientos seleccionados: <span id="SelectedSeatID"></span></p>
            <input type="hidden" name="seatsInForm" id="seatsInForm" value=""/>
            <Link to={HOME_URL} className={styles.link}>
            <button className={styles.confirmar}>Confirmar Selección</button>
            </Link>
            </div>

        </div>
    );
  }
  