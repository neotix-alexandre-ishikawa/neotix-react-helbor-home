import styled from "styled-components";
import bg from "../../../../assets/img/bg-pes.jpg";

export const Background = styled.div`
    background: url('${bg}') no-repeat;
    background-attachment: fixed;
    padding: 80px 0px;
    background-size: cover;
    width: 100%;
`;

export const Container = styled.div`
  padding: 40px 0;
  max-width: 1200px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
`;

export const TextDiv = styled.div`
  padding-bottom: 20px;
  h2 {
    text-transform: uppercase;
    font-size: 42px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
  }
`;

export const IconsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  align-items: center;
  margin-top: 50px;
  text-align: center;
  transition: 0.3s ease-in-out;
  box-sizing: border-box;

  h1 {
    width: 170px;
    font-size: 13px;
    font-weight: 900;
    text-transform: uppercase;
    margin-top: 20px;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
  }

  svg {
    color: #ffffff;
    font-size: 80px;
    text-decoration: none;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease-in-out;
  }

  div img {
    color: #ffffff;
    font-weight: 100;
    height: 80px;
    text-decoration: none;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease-in-out;

    filter: invert();
  }

  div:hover {
    cursor: pointer;
  }

  div:hover svg {
    margin-top: -30px;
    font-size: 90px;
  }

  div:hover img {
    margin-top: -30px;
    font-size: 90px;
  }

  div:hover h1 {
    background-color: #ffffff;
    color: #1f3f5b;
    padding: 10px 20px;
  }
`;

export const ButtonDiv = styled.div`
  button {
    margin-top: 70px;
    padding: 20px 60px;
    display: inline-block;
    text-align: center;
    border: 1px solid #ffffff;
    color: #ffffff;
    font-weight: 900;
    background-color: transparent;
    letter-spacing: 1px;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    text-transform: uppercase;
  }

  button:hover {
    cursor: pointer;
    background-color: #ffffff;
    color: #1f3f5b;
    letter-spacing: 1px;
    box-shadow: 0 0 1em;
  }
`;
