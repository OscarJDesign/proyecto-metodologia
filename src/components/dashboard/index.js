import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import "./styles.scss";
import Background from '../Background/Background';;

 
const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const { cerrarSesion } = authContext;

  return (
    <>
      <section>
      <link href="https://fonts.googleapis.com/css2?family=Thasadith:wght@400;700&display=swap" rel="stylesheet"></link>
      <div className="contDash">
        <h1>Bienvenido</h1>
        <div className="contBtn">
          <Link to="/rutaB" >
            <button className="button" type="button">Crear Publicacion</button>
          </Link>
          {/* <Link to="/rutaA">
            <button  className="button" type="button">Eliminar Publicacion</button>
          </Link> */}
          <Link to="/rutaC">
            <button  className="button" type="button">Ver Publicaciones</button>
          </Link>
        </div>
        
        <Link to="/">
            <button type="buttom" onClick={() => cerrarSesion()}>
              Cerrar Sesion
            </button>
          </Link>

      </div>

        
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>


    </>
  );
};

export default Dashboard;
