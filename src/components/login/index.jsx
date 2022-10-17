import React, { useState } from "react";
import { RiLockPasswordLine, RiMailLine } from "react-icons/ri";
import { Container, Input, Button, ContainerInputs, Spam } from "./styles";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  const navigate = useNavigate();
  const functionAutentication = () => {
    if (email.length < 1 && password.length < 1) {
      setEmptyEmail(true);
      setEmptyPassword(true);
    } else if (email.length === 0) {
      setEmptyEmail(true);
    } else if (password.length === 0) {
      setEmptyPassword(true);
    } else {
      navigate("/list");
      setEmptyEmail(false);
      setEmptyPassword(false);
      console.log(email, password);
    }
  };
  return (
    <>
      <Container>
        <div></div>
        <div className="containerLogin">
          <h1>INICIAR SESIÓN</h1>
          <ContainerInputs>
            <RiMailLine />
            <Input
              hasError={emptyEmail ? "hasError" : false}
              type="email"
              placeholder="Ingrese su email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            {emptyEmail ? <Spam>Campo inválido</Spam> : "none"}
          </ContainerInputs>
          <ContainerInputs>
            <RiLockPasswordLine />
            <Input
              hasError={emptyPassword ? "hasError" : false}
              type="password"
              placeholder="Ingrese su contraseña"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            {emptyPassword ? <Spam>Campo inválido</Spam> : "none"}
          </ContainerInputs>
          <Button type="button" onClick={functionAutentication}>
            Ingresar
          </Button>
          <Link to="/register">¿No tienes cuenta?, Registrate aquí</Link>
        </div>
      </Container>
    </>
  );
};

export default Login;
