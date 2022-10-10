import React, { useState } from "react";
import { Container, Input, Button, ContainerInputs } from "../login/styles";
import { useNavigate, Link } from "react-router-dom";
import { RiLockPasswordLine, RiMailLine, RiUser3Line } from "react-icons/ri";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const functionAutentication = () => {
    if (name.length < 1) {
      alert("falta email");
    } else if (email.length < 1) {
      alert("falta password");
    } else if (password.length < 1) {
      alert("falta password");
    }
    navigate("/");
    console.log(email, password);
  };
  return (
    <>
      <Container>
        <div></div>
        <div className="containerLogin">
          <h1>REGISTRATE</h1>
          <ContainerInputs>
            <RiUser3Line />
            <Input
              type="text"
              placeholder="Ingrese su nombre completo"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </ContainerInputs>
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
          <Link to="/">¿Ya tienes cuenta?, Ingresa aquí</Link>
        </div>
      </Container>
    </>
  );
};

export default Register;
