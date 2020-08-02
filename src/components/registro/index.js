import React from 'react';
import { Link } from 'react-router-dom';
import Video from "../../assets/video/Video2.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faKey, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Registro = () => {
    return (
        <>
            <h1>Registro</h1>
            <br/>

            <div className="contenedorGeneralLogin">
                <video autoPlay="autoPlay" muted loop="loop" id="myVideo">
                    <source src={Video} type="video/mp4" />
                </video>
        
            <form className="login">
                <div className="tituloLogin">
                    <h2>REGISTRO</h2>
                </div>
                
                <p className="contenedorInput">
                    <FontAwesomeIcon className="icono" icon={faUser}></FontAwesomeIcon> 
                    <input 
                        className="inputRegistro"
                        type="text" 
                        placeholder="Nombre de Usuario">  
                    </input>
                </p>
                <p className="contenedorInput">
                    <FontAwesomeIcon className="icono" icon={faKey}></FontAwesomeIcon> 
                    <input 
                        className="inputRegistro"
                        type="password" 
                        placeholder="Contraseña">

                    </input>
                </p>
                <p className="contenedorInput">
                    <FontAwesomeIcon className="icono" icon={faKey}></FontAwesomeIcon> 
                    <input 
                        className="inputRegistro"
                        type="password" 
                        placeholder="Confirmar Contraseña">
                    </input>
                </p>
                <p className="contenedorInput">
                    <FontAwesomeIcon className="icono" icon={faEnvelope}></FontAwesomeIcon> 
                    <input 
                        className="inputRegistro"
                        type="email" 
                        placeholder="tucorreo@email.cl">
                    </input>
                </p> 

                <Link to="/dashboard">
                    <button  className="btnRegistro right" type="submit">Crear Usuario</button>
                </Link>
                <Link to="/">
                    <button className="btnRegistro " type="button"> Volver </button>
                </Link>

            </form>
          
        </div>

            
        </>
    );
};

export default Registro;