  import styles from "./ReservePage.module.css";
  import { useNavigate, useParams } from "react-router-dom";
  import React, { createContext, useState, useContext } from 'react';
  import { SEATS_URL } from "../../constants/url";

  let cantidad =0
  export const TicketContext = createContext();

  export function ReservePage() {
    const [ticket, setTicket] = useState(1);
    const navigate = useNavigate();
    const {movieId}=useParams();
    


            const handleSubmit = async (event) => {
              event.preventDefault();
              if (formData.nombre != '' && formData.cedula !='' && formData.email!=''&& !isNaN(formData.cedula) ){
              navigate(`/seat/${movieId}`);
              cantidad = ticket;
            }
              else{
                alert("REGISTER FAILED, Try Again");              }

          }

          const handleTicketChange = (event) => {
              const value = parseInt(event.target.value);
              if (!isNaN(value) && value >= 1 && value <= 5) {
                setTicket(value);
              }
            };
      
            const onChange = (event) => {
              const { name, value } = event.target;
              
              setFormData((oldData) => ({ ...oldData, [name]: value }));
            };

            const [formData, setFormData] = useState({});
      return(
        <TicketContext.Provider value={ticket}>
          <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h1 className={styles.title}>Formulario de Reserva </h1>
              
              <div className={styles.inputContainer}>
                <label htmlFor="nombre">
                  <span>Ingresa tu nombre completo</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Ej. Ayuda Porfavor"
                  onChange={onChange}
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
                  onChange={onChange}

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
                  onChange={onChange}

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
        </TicketContext.Provider>
      )


  }

    export function TicketProvider({ children }) {

      return (
        <TicketContext.Provider value={cantidad}>
        {children}
        </TicketContext.Provider>
      );
    }