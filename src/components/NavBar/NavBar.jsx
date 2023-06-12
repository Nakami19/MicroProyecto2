import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css"
import { HOME_URL, LOGIN_URL, REGISTER_URL, Reservar_URL,PROFILE_URL } from "../../constants/url";
import { logout } from "../../firebase/auth-service";
import { useUserContext } from "../../contexts/UserContext";

export function NavBar() {
    const navigate = useNavigate();
    const { user, isLoadingUser } = useUserContext();
  
    const handleLogout = async () => {
      await logout(() => navigate(HOME_URL));
    };

    return (
        <nav className={styles.navbar}>
            <ul className={styles.menuoption}>
                <ol className={styles.options}>
                    <Link to={HOME_URL} className={styles.link}>
                        <h1>Inicio</h1>
                    </Link>
                </ol>
            </ul>
     

    {!isLoadingUser && (
        <ul className={styles.menuoption}>
          {!!user ?  (
           <>
            <ol className={styles.options}>
                <Link to={PROFILE_URL} className={styles.link}>
                    <h2>{user.name}</h2> 
                    <img src="https://i.pinimg.com/originals/6f/57/76/6f57760966a796644b8cfb0fbc449843.png" className={styles.userAvatar} />
                </Link>
            </ol>
                <ol className={styles.options}>
                <button
                  type="button"
                  className={`${styles.link} ${styles.logoutBtn}`}  
                  onClick={handleLogout}
                >
                  <h1>Salir</h1>
                </button>
              </ol>
            </>     
          ) : (
            <>
              <ol className={styles.options}>
                <Link to={LOGIN_URL} className={styles.link}>
                  <h1>Iniciar sesión</h1>
                </Link>
              </ol>
              <ol className={styles.options}>
                <Link to={REGISTER_URL} className={styles.link}>
                  <h1>Registrarse</h1>
                </Link>
              </ol>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}
