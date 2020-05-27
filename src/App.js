import './App.css'
import React, { Component } from 'react'

// importa o array de objetos de uma database
import { databaseProdutos } from './database'
import GradeDeProdutos from './components/GradeDeProdutos/GradeDeProdutos'
import Carrinho from './components/Carrinho/Carrinho'
import Filtro from './components/Filtro/Filtro'

class App extends Component {

  state = {
    listaDeProdutos: databaseProdutos, // usa o array de objetos importado
    listaDeProdutosOrdenada: [],
    ordem: "crescente",
    valorTotal: 0.00
    
  }

  componentDidMount = () => {
    // Cria uma cópia do array database de produtos
    let novaListaOrdenada = [...this.state.listaDeProdutos].sort(function (a,b) {
      // Compara a propriedade value dos objetos e os organiza de cima para baixo (b - a)
      return (a.value - b.value)})

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
  adicionaProduto = (event) => {
    console.log(event.target)
  }

  render() { 
    
    return (
      
      <div className="App">

        <Filtro />

        <GradeDeProdutos 
          listaDeProdutosOrdenada={this.state.listaDeProdutosOrdenada}
          ordem={this.state.ordem}
          mudaOrdem={this.mudaOrdem}
          adicionaProduto={this.adicionaProduto}
        />

        <Carrinho 
          valorTotal={this.state.valorTotal}
          
        />

      </div>  
    )
  }
}

export default App