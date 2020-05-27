import './App.css'
import React, { Component } from 'react'

// importa o array de objetos de uma database
import { databaseProdutos } from './database'

class App extends Component {

  state = {
    listaDeProdutos: databaseProdutos, // usa o array de objetos importado
    listaDeProdutosOrdenada: [],
    ordem: "crescente"
  }

  componentDidMount = () => {
    // Cria uma cópia do array database de produtos
    let novaListaOrdenada = [...this.state.listaDeProdutos]

    this.setState ({listaDeProdutosOrdenada: novaListaOrdenada})
  }

  // Ordena o array de produtos conforme a opção selecionada (crescente/decrescente)
  mudaOrdem = (event) => {
    if (event.target.value === "crescente") {
      // Sort() itera o array de objetos e os organiza conforme estruturado na função comparativa

      // a e b são arbitrários na chamada da função e representam objetos do array na iteração
      const novaListaOrdenada = this.state.listaDeProdutosOrdenada.sort(function (a,b) {
        // Compara a propriedade value dos objetos e os organiza de baixo para cima (a - b)
        return (a.value - b.value)})

      this.setState ({
        ordem: "crescente",
        listaDeProdutosOrdenada: novaListaOrdenada
      })

    } else if (event.target.value === "decrescente") {
      const novaListaOrdenada = this.state.listaDeProdutosOrdenada.sort(function (a,b) {
        // Compara a propriedade value dos objetos e os organiza de cima para baixo (b - a)
        return (b.value - a.value)})

      this.setState ({
        ordem: "decrescente",
        listaDeProdutosOrdenada: novaListaOrdenada
      })
    }
  }

  render() { 
    
    // Renderização por map() do array ordenado
    const produtosLi = this.state.listaDeProdutosOrdenada.map(produto => {
      return (
        <li key={produto.id}>
          <img src={produto.imageUrl} alt="produto" />
          <p>{produto.name}</p>
          <p>R${produto.value}</p>
          <button>Colocar no carrinho</button>
        </li>
      )
    })
    
    return (
      
      <div className="App">

        <div className="Filtro">
          <h3>Filtro</h3>
        </div>

        <div className="Produtos">
          <h3>Produtos</h3>
          <p>Quantidade de produtos: {this.state.listaDeProdutos.length}</p>

          <select value={this.state.ordem} onChange={this.mudaOrdem}> 
            <option value="crescente">Valor Crescente</option>
            <option value="decrescente">Valor Decrescente</option>
          </select>

          <ul>
            {produtosLi}  
          </ul>
        </div>

        <div className="Carrinho">
          <h3>Carrinho</h3>
        </div>

      </div>  
    )
  }
}

export default App