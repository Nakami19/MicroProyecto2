import styles from "./ReservePage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SEATS_URL } from "../../constants/url";


export function ReservePage() {
    const [ticket,setTicket] = useState(1);
    const navigate = useNavigate();

      const onFail = (_error) => {  
        alert("REGISTER FAILED, Try Again");
      };

          const handleSubmit = async (event) => {
            event.preventDefault();
            navigate(SEATS_URL);
            onFail;

        }

        const handleTicketChange = (event) => {
            const value = parseInt(event.target.value);
            if (!isNaN(value) && value >= 1 && value <= 5) {
              setTicket(value);
            }
          };
    

    return(
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Formulario de Reserva </h1>
            
            <div className={styles.inputContainer}>
              <label htmlFor="name">
                <span>Ingresa tu nombre completo</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ej. Ayuda Porfavor"
              />
            </div>
            
            <div className={styles.inputContainer}>
              <label htmlFor="cedula">
                <span>Ingresa tu cedula</span>
              </label>
              <input
                type="text"
                name="cedula"
                id="cedula"
                placeholder="Ej. 01001101"
                pattern="[0-9]+"
                required
              />
            </div>  

            <div className={styles.inputContainer}>
              <label htmlFor="email">
                <span>Ingresa tu email</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ej. ayuda@email.com"
              />
            </div>            

            <div className={styles.inputContainer}>
              <label htmlFor="ticket">
                <span>Ingresa la cantidad de tickets (5 max)</span>
              </label>
              <input
                type="number"
                min="1" max="5" 
                name="ticket"
                id="ticket"
                placeholder="Ej. 2"
                value={ticket}
                onChange={handleTicketChange}
              />
            </div>     
            <button
          type="submit"
          className={styles.submitBtn}
          onClick={handleSubmit}
        >
          Enviar
        </button>   
      </form>


      </div>
    )


}