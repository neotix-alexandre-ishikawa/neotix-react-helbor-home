import React, { Component } from "react";

import search from "../../assets/search.svg";

import { Container } from "./styles";

class InputSearch extends Component {
  state = {
    searchText: ""
  };

  onTextChange = event => {
    const val = event.target.value;
    this.setState({ [event.target.name]: val });
    console.log(this.state.searchText);
  };

  render() {
    return (
      <Container>
        <img src={search} alt="search icon" />
        <input
          type="text"
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          placeholder="Busque por apartamentos no centro de São Paulo"
        />
      </Container>
    );
  }
}

export default InputSearch;
