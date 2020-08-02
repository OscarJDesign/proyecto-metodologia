import React, { useReducer } from "react";
import AuthReducer from "./authReducer";
import AuthContext from "./authContext";

import ClienteAxios from "../../config/clienteAxios";
import { LOGIN_EXITOSO, LOGIN_ERROR, REGISTRAR_USUARIO, CERRAR_SESION } from "../../types";
import Axios from "axios";
import clienteAxios from "../../config/clienteAxios";

const AuthState = (props) => {
  //ESTADO INICIAL

  const initialState = {
    usuario: null,
    registro: null,
    mensaje: "",
    status: null

  };

  //FUNCION PARA EL DISPACH (LO QUE VA MODIFICANDO EL STATE)
  const [state, dispach] = useReducer(AuthReducer, initialState);
  //FUNCIONES

  //INICIAR SESION
  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post(
        "/login",
        datos
      );
      console.log(respuesta)
      dispach({
        type: LOGIN_EXITOSO,
        payload: respuesta.data.id,
        token: respuesta.data.token,
        status: respuesta.status
      });
    } catch (error) {
      console.log(error.response);
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
        "/users",
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
        status: state.status,
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
