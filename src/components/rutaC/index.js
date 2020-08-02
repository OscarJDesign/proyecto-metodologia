import React from 'react';
import {Link} from "react-router-dom";
import "./styles.scss";
import imagen from "../../assets/img/dos.jpg";
const RutaC = () => {
    return (
        <>
           <section class="contGeneral">
            <div class="contenedor">
                <h1 class="titulo">Galeria</h1>
                <div class="cont">
                    <div class="archivo">
                        <div class="imagenes">
                            <img src={imagen}  alt="Lorem"></img>
                        </div>
                        <div class="descripcion">
                            
                        </div>
                    </div>
                    <div class="archivo">
                        <div class="imagenes">
                            <img src={imagen}  alt="Lorem"></img>
                        </div>
                        <div class="descripcion">
                            
                        </div>
                    </div>
                    <div class="archivo">
                        <div class="imagenes">
                            <img src={imagen} alt="Lorem"></img>
                        </div>
                        <div class="descripcion">
                            
                        </div>
                    </div>
                    <div class="archivo">
                        <div class="imagenes">
                            <img src={imagen}  alt="Lorem"></img>
                        </div>
                        <div class="descripcion">
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    );
};

export default RutaC;