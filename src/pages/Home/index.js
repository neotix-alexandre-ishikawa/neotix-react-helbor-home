import React from "react";

import Header from "../../components/Header";
import Search from "../../components/Search";
import FooterBanner from "./components/FooterBanner";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

import Features from "./components/Features";
import RealtySearch from "./components/RealtySearch";
import News from "./components/News";

import message from "../../assets/message.svg";
import alert from "../../assets/alert.svg";

import polygon from "../../assets/polygon.svg";
import opacPolygon from "../../assets/opac-polygon.svg";

import {
  InputLabel,
  Content,
  Sales,
  Attendance,
  Institutional
} from "./styles";

function Home() {
  return (
    <>
      <Carousel />
      <Header />
      <InputLabel>
        <Search />
      </InputLabel>
      <Content>
        <Attendance>
          <img src={polygon} alt="polygons" />
          <p>
            Atendimento
            <br />
            ao cliente
          </p>
          <img src={alert} alt="alert" />
          <img src={opacPolygon} alt="polygons" />
        </Attendance>
        <Sales>
          <p>Central de vendas</p>
          <strong>11 3674-5500</strong>
          <button>
            <img src={message} alt="chat box" />
            <p>Chat com o corretor</p>
          </button>
          <img src={alert} alt="alert" />
          <img src={opacPolygon} alt="polygons" />
        </Sales>
      </Content>
      <Institutional>
        <div></div>
      </Institutional>
      <RealtySearch />
      <Features />
      <News />
      <FooterBanner />
      <Footer />
    </>
  );
}

export default Home;
