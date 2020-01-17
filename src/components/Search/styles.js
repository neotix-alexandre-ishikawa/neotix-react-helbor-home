import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;

  img {
    position: absolute;
    left: 40px;
    padding-right: 10px;
    border-right: 1px solid black;
  }

  input {
    font-size: 20px;
    height: 55px;
    border: none;
    margin: 30px;
    padding: 10px;
    outline: none;
    padding-left: 60px;
    width: 100%;
    min-width: 100px;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
