import React from "react";

import logoFoot from "../../assets/img/logo-rodape.png";
import man from "../../assets/man.svg";
import phone from "../../assets/phone.svg";

import { GoLocation } from "react-icons/go";

import {
  Container,
  Links,
  Contact,
  FooterContent,
  Content,
  Location,
  Logo,
  Privacy
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Links>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Imóveis à venda</a>
        </li>
        <li>
          <a href="#">Acompanhe sua obra</a>
        </li>
        <li>
          <a href="#">A empresa</a>
        </li>
        <li>
          <a href="#">Notícias</a>
        </li>
        <li>
          <a href="#">Contatos</a>
        </li>
        <li>
          <a href="#">Central do cliente</a>
        </li>
        <li>
          <a href="#">Investidores</a>
        </li>
        <li>
          <a href="#">Parcerias</a>
        </li>
      </Links>
      <FooterContent>
        <Content>
          <Contact>
            <div>
              <img src={phone} alt="telefone" />
              <h4>Central de vendas</h4>
            </div>
            <h3>3674-5500</h3>
            <div>
              <h4>
                <img src={man} alt="Perfil" />
                Central de vendas
              </h4>
            </div>

            <p>Segunda a sexta-feira das 9 às 18 horas.</p>

            <button>Chat para já clientes</button>

            <p>Grande São Paulo: (11) 4736-7630</p>

            <strong>
              Demais localidades: <span>0800 770 0998</span>
            </strong>
          </Contact>
          <Location>
            <div>
              <h4>
                <GoLocation size={25} color="#fff" />
                São Paulo
              </h4>
              <p>
                Av. Paulista, 1.294, 13ºandar
                <br />
                Bela Vista - 01310-915
              </p>
            </div>
            <div>
              <h4>
                <GoLocation size={25} color="#fff" />
                Mogi das Cruzes
              </h4>
              <p>
                Av. Vereador Narciso Yague Guimarães, 1.145 – 15º andar
                <br />
                Jardim Armênia – 08780-500
              </p>
            </div>
          </Location>
          <Logo>
            <img src={logoFoot} alt="logo" />
          </Logo>
        </Content>
      </FooterContent>
      <Privacy>
        <div>
          <ul>
            <li>&copy; 2016 Helbor.</li>
            <li>
              <a href="#" target="_blank">
                Politica de Privacidade
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Termos e condições
              </a>
            </li>
          </ul>
        </div>
        <div>By Neotix</div>
      </Privacy>
    </Container>
  );
};

export default Footer;
