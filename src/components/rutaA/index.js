import React, { useState } from "react";
import { Link } from "react-router-dom";
const RutaA = () => {
  // ESTO ES PARA JAVASCRIPT
  const [mensaje, setMensaje] = useState(false);
  const ejemploFuncion = () => {
    setMensaje(true);
  };
  const ejemploFuncion2 = () => {
    setMensaje(false);
  };
  // ESTO ES PARA JAVASCRIPT
  return (
    // ESTO ES PARA EL HTML
    <>
      {mensaje ? (   //ternario (ABRIR COSAS, MODALES, ETC)
        <>
          <h1>Desde Ruta A</h1>
          <Link to="/dashboard">
            <button type="button">Dashboard</button>
          </Link>
          <Link to="/rutaB">
            <button type="button">Ruta B</button>
          </Link>
          <Link to="/rutaC">
            <button type="button">Ruta C</button>
          </Link>
          <button type="button" onClick={() => ejemploFuncion2()}>
            FALSO
          </button>
        </>
      ) : (

          
        <button type="button" onClick={() => ejemploFuncion()}>
          VERDADERO
        </button>
      )}
    </>
    // ESTO ES PARA EL HTML
  );
};
export default RutaA;