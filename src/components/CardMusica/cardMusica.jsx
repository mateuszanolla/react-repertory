import React, { Component } from 'react';
import "./estilo.css";

class CardMusica extends Component {    
    
    render() { 
        return (
            <ul className='card-musica'>
                {this.props.musicas.map((musica, index) => {
                return (
                    <li key={index}>   
                    <section>
                        <header>
                        <h3>{musica.titulo}</h3>
                        <h4>{musica.artista}</h4>
                        </header>
                        <p>{musica.tonalidade}</p>
                        <p>{musica.obs}</p>
                        
                    </section>
                    </li>
                    )
                })}    
            </ul>
        );
    }
}
 
export default CardMusica;