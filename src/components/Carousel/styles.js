import styled from "styled-components";
import Slider from "react-slick";
import bg from "../../assets/background.svg";

export const Slide = styled(Slider)`
  height: 100%;

  div {
    height: 100%;
    background: url('${bg}') no-repeat;
    background-size: cover;
  }
`;

export const Button = styled.button`
  top: 420px;
  left: 40px;
  cursor: pointer;
  background: transparent;
  border: none;
  z-index: 888;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;

  button {
    position: absolute;
    top: 420px;
    right: 40px;
    cursor: pointer;
    background: transparent;
    border: none;
    z-index: 888;
  }

  @media (max-width: 670) {
    button {
      display: none;
    }
  }
`;
