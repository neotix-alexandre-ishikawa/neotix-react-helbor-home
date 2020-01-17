import styled from "styled-components";

export const Container = styled.div`
  padding: 100px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 42px;
    font-weight: 900;
    text-align: center;
    color: #1f3f5b;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;
    text-align: center;
    color: #1f3f5b;
  }

  button {
    cursor: pointer;
    margin-top: 40px;
    border: none;
    font-weight: 900;
    width: 300px;
    height: 60px;
    background: #0e2438;
    padding: 10px;
    text-transform: uppercase;
    color: #fff;
    transition: 0.4s;
  }

  button:hover {
    color: #1f3f5b;
  }
`;

export const NewsContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  list-style-type: none;
  margin-top: 60px;

  h6 {
    margin-top: 20px;
    font-size: 13px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    color: #353d44;
    letter-spacing: 1px;
    line-height: 18px;
    opacity: 1;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
  }

  li {
    position: relative;
    cursor: pointer;
  }

  img {
    width: 250px;
  }
`;

export const DataNews = styled.div`
  width: 80px;
  height: 80px;
  background: #1f3f5b;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0px 0px 20px 0px;
  text-align: center;
  -webkit-box-shadow: 4px 4px 7px -6px #000000;
  box-shadow: 4px 4px 7px -6px #000000;
  opacity: 1;

  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;

  div:first-child {
    font-size: 40px;
    font-weight: 900;
    color: #fff;
    margin-bottom: -16px;
  }

  div:last-child {
    font-size: 22px;
    font-weight: 900;
    color: #ffffff;
    margin-bottom: -5px;
  }
`;
