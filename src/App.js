import React, { Component } from 'react';
import CardMusica from "./components/CardMusica/cardMusica";
import NovaInstancia from "./components/novaInstancia/novaInstancia";
import "./index.css";


class App extends Component {
  constructor(){
    super();
    this.state = {
      musicas: []
    }
  }

  criarCard(titulo, artista, tonalidade, obs){
    const novaMusica = {titulo, artista, tonalidade, obs};
    const novoArray = [...this.state.musicas, novaMusica]
    const novoEstado = {
      musicas: novoArray
    }
    this.setState(novoEstado)
  };

  render(){
    return (
      <section className="tela">
        <div className="aba-lateral">
          <h2>Adicione uma nova música</h2>
          <NovaInstancia criarCard={this.criarCard.bind(this)} />

        </div>
        
        <div className="historico">
          <h3>Histórico:</h3>
          <CardMusica musicas={this.state.musicas} /> 
        </div>
        
      </section>
    );
  }
}

export default App;