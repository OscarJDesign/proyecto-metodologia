import React from 'react';
import RutaA from './components/rutaA';
import RutaB from './components/rutaB';
import RutaC from './components/rutaC';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Dashboard from './components/dashboard';
import Login from './components/auth/'
import Registro from './components/registro';
import AuthState from './context/auth/authState';
import tokenAuth from './config/token';

function App() {
  //COPIO TOKEN DEL LOCAL STORAGE
  // const token = localStorage.getItem("token");
  // if(token){
  //   tokenAuth(token);
  // }
  return (
    <>
    <AuthState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/rutaA" component={RutaA} />
          <Route exact path="/rutaB" component={RutaB} />
          <Route exact path="/rutaC" component={RutaC} />
          <Route exact path="/registro" component={Registro} />
        </Switch>
      </Router>
    </AuthState>
    </>
    
  );
}

export default App;
