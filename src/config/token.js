import clienteAxios from "./clienteAxios";

const tokenAuth = (token) => {
  if (token) {
    clienteAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`; //VERIFICAR EL TOKEN
  } else {
    delete clienteAxios.defaults.headers.common["Authorization"];
  }
};

export default tokenAuth;