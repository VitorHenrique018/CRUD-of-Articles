import React, { Component } from "react";
import api from "./api";

class App extends Component {
  state = {
    artigos: [],
  };

  async componentDidMount() {
    const response = await api.get("/artigo");

    console.log(response.data);

    this.setState({ artigos: response.data });
  }

  render() {
    const { artigos } = this.state;
    return (
      <div className="App">
        <h1>Listar Artigos</h1>
        <ul>
          {artigos.map((index) => (
            <li key={index.createdAt}>
              <h2>{index.titulo}</h2>
              <p>{index.conteudo}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
