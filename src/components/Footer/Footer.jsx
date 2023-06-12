import { useEffect } from "react";
import { useMovies } from "../../hooks/useMovies";
import styles from "./Footer.module.css"


export function Footer() {
    
    return (
        <footer className={styles.footer}> 
            <ul className={styles.menuinfo}>
                <ol className={styles.info}>
                    <h2>Contáctanos</h2>
                </ol>
                <ol className={styles.info}>
                    <h2>cineunimet@gmail.com</h2>
                </ol>
            </ul>

            <ul className={styles.menuinfo}>
                <ol className={styles.info}>
                    <h2>Dirección</h2>
                </ol>
                <ol className={styles.info}>
                    <h2>
                    Av. Boyacá con autopista Petare-Guarenas.
                    </h2>
                    <h2>Urbanización Terrazas del Ávila, 
                    Caracas-Miranda.</h2>
                    <h2> Zona postal 1073</h2>
                </ol>
            </ul>
        </footer>
    )
}