import React from "react";
import logo from "../../assets/logo.svg";

import { Container, GripLines } from "./styles";

const Header = () => {
  return (
    <Container>
      <GripLines />
      <img src={logo} alt="Helbor logo" />
    </Container>
  );
};

export default Header;
