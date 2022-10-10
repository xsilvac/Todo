import React, { useState } from "react";
import { RiLockPasswordLine, RiMailLine } from "react-icons/ri";
import { Container, Input, Button, ContainerInputs } from "./styles";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const functionAutentication = () => {
    if (email.length < 1) {
      alert("falta email");
    } else if (password.length < 1) {
      alert("falta password");
    }
    navigate("/list");
    console.log(email, password);
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
              type="email"
              placeholder="Ingrese su email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </ContainerInputs>
          <ContainerInputs>
            <RiLockPasswordLine />
            <Input
              type="password"
              placeholder="Ingrese su contraseña"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
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
