import React, { Component } from "react";

import pong from "../../../../assets/pong.svg";
import laundry from "../../../../assets/laundry.svg";
import swim from "../../../../assets/swim.svg";
import theater from "../../../../assets/theater.svg";
import beautyCenter from "../../../../assets/beauty-center.svg";
import gym from "../../../../assets/bench-press.svg";

import { Container, Background, TextDiv, IconsDiv, ButtonDiv } from "./styles";

class Features extends Component {
  render() {
    return (
      <Background>
        <Container>
          <TextDiv>
            <h2>O que não pode faltar na sua casa?</h2>
            <p>
              Clique e descubra quais empreendimentos da Helbor antenedm às suas
              necessidades
            </p>
          </TextDiv>
          <IconsDiv>
            <div>
              <img src={pong} alt="Pong" />
              <h1>Salao de jogos</h1>
            </div>
            <div>
              <img src={swim} alt="Pong" />
              <h1>Piscina</h1>
            </div>
            <div>
              <img src={beautyCenter} alt="Pong" />
              <h1>Beauty Center</h1>
            </div>
            <div>
              <img src={laundry} alt="Pong" />
              <h1>Lavanderia</h1>
            </div>
            <div>
              <img src={theater} alt="Pong" />
              <h1>Cinema</h1>
            </div>
            <div>
              <img src={gym} alt="Pong" />
              <h1>Salao de jogos</h1>
            </div>
          </IconsDiv>
          <ButtonDiv>
            <button>Ver outras opções</button>
          </ButtonDiv>
        </Container>
      </Background>
    );
  }
}

export default Features;
