import React, { useState } from "react";
import { ContainerUl, ContainerLi, ContainerLogo } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import "./style.css";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={show ? "hiddenSidebar" : "showSidebar"}>
      <ContainerUl>
        <ContainerLogo onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </ContainerLogo>

        <ContainerLi>
          <AiOutlineHome />
          {show ? "" : <h2>Hola</h2>}
        </ContainerLi>
        <ContainerLi>
          <AiOutlineHome />
          {show ? "" : <h2>Chau</h2>}
        </ContainerLi>
      </ContainerUl>
    </div>
  );
};

export default Sidebar;
