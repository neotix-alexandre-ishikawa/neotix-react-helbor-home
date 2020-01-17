import React, { Component } from "react";

import { GoLocation } from "react-icons/go";
import { Container, Content } from "./styles";

class RealtySearch extends Component {
  render() {
    return (
      <Container>
        <Content>
          <div>
            <h4>Procurando</h4>
            <strong>Imóveis</strong>
            <p>
              <GoLocation size={25} color="red" />
              Você está em <span>São Paulo?</span>
            </p>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">
                  Pinheiros<span>1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Aclimação<span>1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Limão<span>1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Lapa<span>1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Centro<span>1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Vila Olímpia<span>1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Itaim Bibi<span>1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Pompéia<span>1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Vila Leopoldina<span>1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Granja Julieta<span>1</span>
                </a>
              </li>
              <li>
                <a href="#">Ver todos os bairros</a>
              </li>
            </ul>
          </div>
        </Content>
      </Container>
    );
  }
}

export default RealtySearch;
