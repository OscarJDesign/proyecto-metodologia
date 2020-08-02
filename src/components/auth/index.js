import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import Video from "../../assets/video/Video2.mp4";
import Logo from "../../assets/img/logo2020.png";
import Registro from "./Registro";

const Login = () => {
  const authContext = useContext(AuthContext);
  const { usuario, iniciarSesion, mensaje, status } = authContext;

  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  const [usuarioLocal, setUsuario] = useState({
    email: "",
    password: "",
  });

  //OBJECT DESTRUCTURING
  const { email, password } = usuarioLocal; //EXTRAER PROPIEDAS DE USUARIO PARA QUITAR USUARIO.ALGO

  //HOOK DE EFECTO
  useEffect(() => {
    if(mensaje !== ""){
      alert(mensaje);
      return;
    }
  }, [mensaje, status])

  //LEER CAMBIOS EN INPUT
  const leerInputs = (e) => {
    setUsuario({
      //hace una COPIA DE USUARIO
      ...usuarioLocal,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault(); //EVITAR QE PAGINA RECARGE AL ENVIAR UN SUBMIT

    //VALIDAR CAMPOS VACIOS
    //.trim BORRA LOS ESPACIOS EN BLANCO PARA NO GENERAR ERRORES Y SEGURIDAD
    if (email.trim() === "" || password.trim() === "") {
      alert("Completa los campos vacios");
      return;
    } 

    //PASAR EL USUARIO AL ACTION
    iniciarSesion(usuarioLocal);
  };

  return (
    <>
      <div className="contenedorGeneralLogin">
        <video autoPlay="autoPlay" muted loop="loop" id="myVideo">
          <source src={Video} type="video/mp4" />
        </video>

        <div>
          <div className="logoOlimpiadas">
            <img className="logo" alt="imagen" src={Logo}></img>
          </div>
          {mostrarRegistro ? (
            <Registro
              mostrarRegistro={mostrarRegistro}
              setMostrarRegistro={setMostrarRegistro}
            />
          ) : (
            <>
            <form className="login" onSubmit={submitForm}>
              <h3 className="tituloLogin">INICIAR SESION</h3>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="su correo"
                className="user"
                value={email}
                onChange={leerInputs}
                autoComplete="off"
              />
              <input
                type="password"
                id="password"
                name="password"
                className="password"
                placeholder="su contraseña"
                value={password}
                onChange={leerInputs}
                autoComplete="off"
              />
              <p className="opcionesLogin">
                ¿Has olvidado tu contraseña? click aqui
              </p>

              <p
                className="opcionesLogin"
                onClick={() => setMostrarRegistro(true)}
              >
                ¿No tienes cuenta? Registrate
              </p>

              <button className="btnLogin" type="submit">
                Entrar
              </button>
            </form>

            {status === null ? null : status === 200 ? <Redirect to="/dashboard" /> : null}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
