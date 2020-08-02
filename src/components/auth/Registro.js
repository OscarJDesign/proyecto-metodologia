import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Login from ".";

const Registro = ({ mostrarRegistro, setMostrarRegistro }) => {
  const authContext = useContext(AuthContext);
  const { registrarUsuario, registro } = authContext;

  const [usuarioRegistro, setUsuarioRegisto] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const [passwordTwo, setPaswordTwo] = useState({
    confirmarPass: "",
  });

  useEffect(() => {
    console.log(registro);
    if (registro === 200) {
      alert("¡Registro Existoso!");
      setMostrarRegistro(false);
      return;
    }
  }, [registro, mostrarRegistro]);

  const { confirmarPass } = passwordTwo;

  const { nombre, email, password } = usuarioRegistro;

  const onChange = (e) => {
    setUsuarioRegisto({
      ...usuarioRegistro,
      [e.target.name]: e.target.value,
    });
  };

  const onChangePassTwo = (e) => {
    setPaswordTwo({
      ...passwordTwo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //   validar los campos
    if (nombre.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Completa los campos vacios");
      return;
    } else if (password !== confirmarPass) {
      alert("Las contraseñas deben ser iguales");
      return;
    }
    // pasar al accion nuest usuario registrado
    registrarUsuario(usuarioRegistro);
  };

  return (
    <>
      <div className="contenedorGeneralLogin">
        {mostrarRegistro === false ? (
          <Login setMostrarRegistro={setMostrarRegistro} />
        ) : (
          <form className="login" onSubmit={onSubmit}>
            <div className="tituloLogin">
              <h2>REGISTRO</h2>
            </div>

            <p className="contenedorInput">
              <FontAwesomeIcon
                className="icono"
                icon={faUser}
              ></FontAwesomeIcon>
              <input
                className="inputRegistro"
                type="text"
                placeholder="Nombre de Usuario"
                name="nombre"
                value={nombre}
                onChange={onChange}
              ></input>
            </p>
            <p className="contenedorInput">
              <FontAwesomeIcon className="icono" icon={faKey}></FontAwesomeIcon>
              <input
                className="inputRegistro"
                type="password"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onChange}
              ></input>
            </p>
            <p className="contenedorInput">
              <FontAwesomeIcon className="icono" icon={faKey}></FontAwesomeIcon>
              <input
                className="inputRegistro"
                type="password"
                placeholder="Confirmar Contraseña"
                name="confirmarPass"
                value={confirmarPass}
                onChange={onChangePassTwo}
              ></input>
            </p>
            <p className="contenedorInput">
              <FontAwesomeIcon
                className="icono"
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <input
                className="inputRegistro"
                type="email"
                placeholder="tucorreo@email.cl"
                name="email"
                value={email}
                onChange={onChange}
              ></input>
            </p>

            <button className="btnRegistro right" type="submit">
              Crear Usuario
            </button>
            <button
              className="btnRegistro "
              type="button"
              onClick={() => setMostrarRegistro(false)}
            >
              Volver
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Registro;
