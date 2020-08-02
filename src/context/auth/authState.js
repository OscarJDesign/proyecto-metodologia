import React, { useReducer } from "react";
import AuthReducer from "./authReducer";
import AuthContext from "./authContext";

import ClienteAxios from "../../config/clienteAxios";
import { LOGIN_EXITOSO, LOGIN_ERROR, REGISTRAR_USUARIO, CERRAR_SESION } from "../../types";
import Axios from "axios";

const AuthState = (props) => {
  //ESTADO INICIAL

  const initialState = {
    usuario: null,
    registro: null,
    mensaje: ""
  };

  //FUNCION PARA EL DISPACH (LO QUE VA MODIFICANDO EL STATE)
  const [state, dispach] = useReducer(AuthReducer, initialState);
  //FUNCIONES

  //INICIAR SESION
  const iniciarSesion = async (datos) => {
    console.log(datos);
    try {
      const respuesta = await Axios.post(
        "https://ubb-grafico.herokuapp.com/login",
        datos
      );
      console.log(respuesta.data);
      dispach({
        type: LOGIN_EXITOSO,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error.response.data.message);
      dispach({
        type: LOGIN_ERROR,
        payload: error.response.data.message,
      });
    }
  };

  //REGISTRAR USUARIO
  const registrarUsuario = async (datos) => {
    console.log(datos);
    try {
      const respuesta = await ClienteAxios.post(
        "https://ubb-grafico.herokuapp.com/users",
        datos
      );
      console.log(respuesta.data.data);
      console.log(respuesta);
      dispach({
        type: REGISTRAR_USUARIO,
        payload: respuesta.status,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const cerrarSesion = () => {
      dispach({
        type: CERRAR_SESION,
      });
    }

  return (
    <AuthContext.Provider
      value={{
        usuario: state.usuario,
        registro: state.registro,
        mensaje: state.mensaje,
        iniciarSesion,
        registrarUsuario,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
