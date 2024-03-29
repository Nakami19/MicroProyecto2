import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import { HOME_URL, LOGIN_URL } from "../../constants/url";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth-service";
import { useState } from "react";

export function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setData] = useState({});
  

  const onSuccess = () => {
    navigate(HOME_URL);
  };

  const onFail = (_error) => {
    alert("REGISTER FAILED, Try Again");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await registerWithEmailAndPassword({
      userData: formData,
      onSuccess,
      onFail,
    });
  };

  const handleGoogleClick = async () => {
    await signInWithGoogle({
      onSuccess: () => navigate(HOME_URL),
    });
  };

  const onChange = (event) => {
    setData((oldData) => ({
      ...oldData,
      [event.target.name]: event.target.value,
    }));
  };

  

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Crea una cuenta</h1>
        <p className={styles.welcomeTxt}>
          Bienvenido! Te invitamos a ser parte de nuestra plataforma.
        </p>

        {/* NAME FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="name">
            <span>Ingresa tu nombre completo</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            pattern="[A-Za-z]+"
            required
            placeholder="Ej. Ayuda Porfavor"
            onChange={onChange}

          />
        </div>

        {/* EMAIL FIELD */}
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

        {/* PASSWORD FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="password">
            <span>Ingresa tu contraseña</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={onChange}
          />
        </div>


        <button
          type="submit"
          className={styles.submitBtn}
          onClick={handleSubmit}
        >
          Entrar
        </button>

        <button
          type="button"
          className={styles.googleBtn}
          onClick={handleGoogleClick}
        >
          Registro con google
        </button>

        <Link to={LOGIN_URL} className={styles.loginRedirect}>
          ¿Ya tienes una cuenta?{" "}
          <span className={styles.redirectLink}>Inicia sesión</span>
        </Link>
      </form>
    </div>
  );
}
