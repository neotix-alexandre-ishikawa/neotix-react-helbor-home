import styled, { css } from "styled-components";

import bg from "../../assets/background.svg";
import instBg from "../../assets/institutionalBackground.svg";

export const Banner = styled.div`
  background: url('${bg}');
  background-size: cover;
  height: 900px;
  width: 100%;
`;

export const InputLabel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 900px;
  z-index: 2;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  a {
    cursor: pointer;
  }

  @media (max-width: 1200) {
  }

  @media (max-width: 600px) {
    a {
      display: none;
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  color: #fff;
  height: 150px;
  background-color: #0e3247;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 999;
  position: sticky;
  top: 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: left;
    height: 200px;
    overflow: hidden;
  }
`;

export const Attendance = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-right: 140px;

  p {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
    display: block;
  }

  img {
    margin-right: 5px;
  }

  img:nth-child(3) {
    position: absolute;
    left: 170px;
    top: -40px;
  }

  img:last-child {
    position: absolute;
    left: 120px;
    z-index: 2;
    top: 10px;
  }
`;

export const Sales = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: left;

  p {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
    display: block;
  }

  img:nth-child(4) {
    position: absolute;
    left: 220px;
    top: -40px;
  }

  img:last-child {
    position: absolute;
    left: 170px;
    z-index: 2;
    top: 10px;
  }

  strong {
    font-size: 30px;
  }

  button {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 7px;
    background-color: #20b2aa;
    border: none;
    margin-top: 5px;
    cursor: pointer;
  }

  button > img {
    margin-right: 4px;
  }
`;

export const Institutional = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  position: relative;
  height: 200px;
background: url("${instBg}") no-repeat;
  background-size: cover;

  div {
    position: absolute;
    background-color: #03395e;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`;
