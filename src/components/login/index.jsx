import React from "react";
import { Container, Input, Button } from "./styles";

const Login = () => {
  return (
    <>
      <Container>
        <div></div>
        <div className="containerLogin">
          <h1>INICIAR SESIÓN</h1>
          <Input type="email" placeholder="Ingrese su email" />
          <Input type="password" placeholder="Ingrese su password" />
          <Button>Ingresar</Button>
          <a href="/">¿No tienes cuenta?, Registrate aquí</a>
        </div>
      </Container>
    </>
  );
};

export default Login;
