import styled from "styled-components";

export const Container = styled.div`
  background-color: #dce4eb;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 310px;
  max-width: 1170px;
  margin: auto;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }

  div:nth-child(1) {
    color: #1f3f5b;
    align-items: center;
    flex: 1;
  }

  h4 {
    margin: 0;
    padding: 0;
    font-size: 40px;
    font-weight: 100;
    text-transform: uppercase;
  }

  strong {
    line-height: 65px;
    font-size: 70px;
    text-transform: uppercase;
  }

  svg {
    padding: 0;
    padding-right: 10px;
    margin: 0;
  }
  p {
    margin: 0;
    line-height: 10px;
  }
  span {
    color: red;
    font-weight: bold;
  }

  div:nth-child(2) {
    margin: 0 60px;
    padding: 10px;

    li {
      list-style: none;
      display: inline-block;
      height: 50px;
      margin-right: 15px;
    }

    li a:hover {
      background-color: #0e3247;
      color: #ffffff;
      text-decoration: none;
    }

    li:last-child a {
      color: #1f3f5b;
      padding: 10px 30px 10px 30px;
      border: 1px solid #1f3f5b;
      background-color: transparent;
    }

    li:last-child a:hover {
      background-color: #0e3247;
      color: #ffffff;
      text-decoration: none;
    }

    a {
      background-color: #20b2aa;
      display: block;
      position: relative;
      font-size: 14px;
      color: #fff;
      text-decoration: none;
      width: auto;
      padding: 10px 60px 10px 20px;
      -webkit-transition: 0.3s ease;
      transition: 0.6s ease;

      > span {
        background-color: #ca3636;
        color: #ffffff;
        border-radius: 50px;
        width: 20px;
        height: 20px;
        position: absolute;
        right: 10px;
        text-align: center;
        font-size: 9px;
        padding: 4px 0px;
        top: 10px;
        -webkit-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
      }
    }

    @media (max-width: 999px) {
      li:nth-of-type(1n + 9) {
        display: none;
      }
      li:last-child {
        display: inline-block;
      }
    }

    @media (max-width: 770px) {
      li:nth-of-type(1n + 5) {
        display: none;
      }
      li:last-child {
        display: inline-block;
      }
    }
  }
`;
