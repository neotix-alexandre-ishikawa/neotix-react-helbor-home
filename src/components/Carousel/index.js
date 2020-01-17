import React, { Component } from "react";

import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

import { Slide, Button, Container } from "./styles";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      draggable: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Container>
        <Button type="button" onClick={this.previous}>
          <img src={arrowLeft} alt="arrow left" />
        </Button>
        <Slide
          ref={c => {
            this.slider = c;
          }}
          {...settings}
        >
          <div></div>
          <div></div>
          <div></div>
        </Slide>
        <button type="button" onClick={this.next}>
          <img src={arrowRight} alt="arrow right" />
        </button>
      </Container>
    );
  }
}

export default Carousel;
