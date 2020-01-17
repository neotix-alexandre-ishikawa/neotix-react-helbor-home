import styled from "styled-components";
import bg from "../../../../assets/img/bg-corretor.jpg";

export const Container = styled.div`
    background: url('${bg}');
    background-size: cover;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 230px;
  color: #fff;

  div:first-child {
    text-align: right;
    margin-right: 150px;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background: #fff;
    width: 60%;
    height: 100px;
    padding: 20px;
    outline: 1px solid #12405b;
    outline-offset: -5px;

    p {
      text-transform: uppercase;
      font-size: 21px;
      color: #12405b;
    }

    p + p {
      font-size: 33px;
      font-weight: 900;
    }
  }
`;
