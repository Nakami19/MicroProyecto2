import { Link} from "react-router-dom";
import styles from "./NavBar.module.css"
import { HOME_URL, LOGIN_URL, REGISTER_URL, Reservar_URL } from "../../constants/url";

export function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menuoption}>
                <ol className={styles.options}>
                    <Link to={HOME_URL} className={styles.link}>
                        <h1>Inicio</h1>
                    </Link>
                </ol>
                <ol className={styles.options}>
                    <Link to={Reservar_URL} className={styles.link}>
                    <h1>Reservar</h1>
                    </Link>
                </ol>             
            </ul>

            <ul className={styles.menuoption}>
                <ol className={styles.options}>
                    <Link to={REGISTER_URL} className={styles.link}>
                        <h1>Iniciar Sesión</h1>
                    </Link>
                </ol>
                <ol className={styles.options}>
                    <Link to={LOGIN_URL} className={styles.link}>
                    <h1>Registrarse</h1>
                    </Link>
                </ol>       
            </ul>
        </nav>
    ) 
}
