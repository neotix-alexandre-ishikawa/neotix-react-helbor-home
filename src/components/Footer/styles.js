import styled from "styled-components";

export const Container = styled.div`
  background: #1f3f5b;
  width: 100%;
`;

export const Links = styled.ul`
  max-width: 1100px;
  margin: auto;
  padding: 20px 0px;
  color: #cdd8e1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  li {
    margin-right: 10px;
    list-style-type: none;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
  }

  a {
    font-size: 11px;
    padding: 5px 10px;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    border-radius: 5px;
  }

  li a:hover {
    color: #1f3f5b;
    background-color: #ffffff;
  }
`;

export const FooterContent = styled.div`
  padding: 70px 0px;
  border-top: 2px solid #38546d;
  border-bottom: 2px solid #38546d;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  max-width: 1100px;
  margin: auto;
  color: #fff;

  h4 {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 1px;
  }
  p {
    color: #cdd8e1;
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

export const Contact = styled.div`
  div {
    display: flex;
    align-items: center;

    h4 {
      display: block;
    }
  }

  img {
    margin-right: 9px;
    height: 30px;
    filter: invert();
  }

  svg {
    margin-right: 9px;
  }

  h3 {
    margin-bottom: 30px;
  }

  button {
    border: none;
    padding: 10px 40px;
    background-color: #22d9c5;
    display: inline-block;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 32px;
    color: #203f5a;
    text-align: center;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    cursor: pointer;
  }

  strong {
    color: #cdd8e1;
    font-size: 20px;
  }
`;

export const Location = styled.div`
  h4 {
    display: inline-block;
    padding: 0;
  }

  svg {
    margin-right: 8px;
  }

  p {
    line-height: 19px;
  }
`;

export const Logo = styled.div`
  margin-top: 50px;
`;

export const Privacy = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 13px;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-right: 50px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
