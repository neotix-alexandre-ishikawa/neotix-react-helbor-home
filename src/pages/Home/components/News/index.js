import React, { Component } from "react";
import quarto from "../../../../assets/img/quarto.jpg";

import { Container, NewsContent, DataNews } from "./styles";

class News extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1>Novidades Helbor</h1>
          <p>Aqui você verá as últimas notícias e o Helbor News</p>
        </div>
        <NewsContent>
          <li>
            <DataNews>
              <div>30</div>
              <div>Nov</div>
            </DataNews>
            <img src={quarto} alt="quarto" />
            <a href="#" />
            <h6>Helbor lança residencial no Mogilar</h6>
          </li>
          <li>
            <DataNews>
              <div>10</div>
              <div>Nov</div>
            </DataNews>
            <a href="#" />
            <img src={quarto} alt="quarto" />
            <h6>Telhados novos</h6>
          </li>
          <li>
            <DataNews>
              <div>08</div>
              <div>Nov</div>
            </DataNews>
            <a href="#" />
            <img src={quarto} alt="quarto" />
            <h6>Helbor na contracapa</h6>
          </li>
          <li>
            <DataNews>
              <div>08</div>
              <div>Nov</div>
            </DataNews>
            <a href="#" />
            <img src={quarto} alt="quarto" />
            <h6>Helbor terá novo empreendimento</h6>
          </li>
        </NewsContent>
        <div>
          <button>Veja mais notícias</button>
        </div>
      </Container>
    );
  }
}

export default News;
