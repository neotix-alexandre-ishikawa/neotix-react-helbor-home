import React from "react";

import { Container, Content } from "./styles";

const FooterBanner = () => {
  return (
    <Container>
      <Content>
        <div>
          <h1>Tem interesse em comprar um Helbor?</h1>
          <p>
            Entre em contato com nossa central de vendas e sinta-se em casa para
            tirar todas as suas dúvidas!
          </p>
        </div>
        <div>
          <p>
            Central de Vendas <strong>Helbor</strong>
          </p>
          <p>3674-5500</p>
        </div>
      </Content>
    </Container>
  );
};

export default FooterBanner;
