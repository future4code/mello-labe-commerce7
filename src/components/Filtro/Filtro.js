import React, { Component } from 'react'

class Filtro extends Component {

  render () {
    
      return (

        <div className="Filtro">
          
          <h3>Filtro</h3>
          <p>Valor mínimo</p>  
          <input
            type="number"
            name="valorMin"
            onChange={this.props.mudaValorMinimo}
          />
          <p>Valor máximo</p>  
          <input
            type="number"
            name="valorMax"
            onChange={this.props.mudaValorMaximo}
          /> 
          <p>Buscar produto</p>  
          <input 
            name="buscaNome"
            onChange={this.props.mudaNome}
          />
        </div>
        )
    }
}

export default Filtro