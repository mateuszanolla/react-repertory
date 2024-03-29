import React, { Component } from 'react';
import "./estilo.css";

class NovaInstancia extends Component {
    constructor(props){
        super(props);
        this.titulo = "";
        this.descricao = "";
        this.tonalidade = "";
        this.observacoes = "";
    }

    _handleMudaTitulo(e){
        e.stopPropagation();
        this.titulo = e.target.value
    }

    _handleMudaArtistao(e){
        e.stopPropagation();
        this.artista = e.target.value
    }

    _handleTonalidade(e){
        e.stopPropagation();
        this.tonalidade = e.target.value;
    }

    _handleObs(e){
        e.stopPropagation();
        this.observacoes = e.target.value;
    }

    _criarCard(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.criarCard(this.titulo, this.artista, this.tonalidade, this.observacoes)
    }

    

    render() {
        return(
        <form className='container-novainstancia'
            onSubmit={this._criarCard.bind(this)}
        >
            <input 
            className='elements-novainstancia' 
            type="text" 
            placeholder="Título" 
            onChange={this._handleMudaTitulo.bind(this)}/>

            <input 
            className='elements-novainstancia' 
            placeholder="Artista"
            onChange={this._handleMudaArtistao.bind(this)}/>

            <input 
            className='elements-novainstancia' 
            placeholder="Tonalidade"
            onChange={this._handleTonalidade.bind(this)}/>       

            <textarea rows={5} className="elements-novainstancia" placeholder='Obsevações' onChange={this._handleObs.bind(this)} />

            <button className='elements-novainstancia button'>
                Adicionar ao Repertório
            </button>
        </form>
        );
    }
}

export default NovaInstancia;