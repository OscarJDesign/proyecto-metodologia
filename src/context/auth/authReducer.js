import {
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  REGISTRAR_USUARIO,
  CERRAR_SESION,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_EXITOSO:
      localStorage.setItem("token", action.token);
      localStorage.setItem("usuario", action.payload);
      return {
        ...state,
        usuario: action.payload,
        status: action.status,
      };
    case REGISTRAR_USUARIO:
      console.log(action.payload);
      return {
        ...state,
        registro: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      };
    case CERRAR_SESION:
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      return {
        ...state,
        usuario: null,
      };

    default:
      return state;
  }
};
