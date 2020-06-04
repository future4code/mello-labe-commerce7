
import React, { Component } from 'react'
import styled from 'styled-components'
// importa o array de objetos de uma database
import { databaseProdutos } from './database'
import GradeDeProdutos from './components/GradeDeProdutos/GradeDeProdutos'
import Carrinho from './components/Carrinho/Carrinho'
import Filtro from './components/Filtro/Filtro'

const AppDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 20px;
  width: 100%;
  height: 100%;
  > div {
    border: 2px solid;  
  }
`

class App extends Component {

  state = {
    listaDeProdutos: databaseProdutos, // usa o array de objetos importado
    ordem: "crescente",
    valorMin: null,
    valorMax: null,
    textoBusca: "",
    carrinho: []
  }

  pegaListaDeProdutos = () => {
    const {listaDeProdutos, valorMin, valorMax, textoBusca} = this.state
    let listaDeProdutosFiltrada = listaDeProdutos
      .filter((produto) => {
        const nomeProduto = produto.name.toLowerCase() 
        return nomeProduto.indexOf(textoBusca.toLowerCase()) > -1
      }).filter((produto) => {
        return produto.value < (valorMax || Infinity)
      }).filter((produto) => {
        return produto.value > (valorMin || 0)
      })
    return listaDeProdutosFiltrada
  } 

  atualizaInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  mudaOrdem = (event) => {
    this.setState({
      ordem: event.target.value
    })
  }

  adicionaProduto = (produto) => {
    const novoCarrinho = [...this.state.carrinho]
    const produtoIndex = novoCarrinho.findIndex(item => item.produtoInfo.id === produto.id )
    if (produtoIndex === -1) {
      novoCarrinho.push({produtoInfo: produto, quantidade: 1 })
    } else {
        novoCarrinho[produtoIndex].quantidade += 1
    }
    this.setState ({
      carrinho: novoCarrinho 
    })
  }

  removeProduto = (produto) => {
    const novoCarrinho = [...this.state.carrinho]
    const produtoIndex = novoCarrinho.findIndex(item => item.produtoInfo.id === produto.id)
    
    novoCarrinho.splice(produtoIndex, 1)

    this.setState ({
      carrinho: novoCarrinho 
    })
  }

  render () {
    const listaDeProdutos = this.pegaListaDeProdutos()
    const produtosOrdenados = listaDeProdutos.sort((produtoA, produtoB) => {
      if (this.state.ordem === "crescente")  {
        return (produtoA.value - produtoB.value)
      } else {
        return (produtoB.value - produtoA.value)
      }
    })

    return (
      <AppDiv>

        <Filtro 
          atualizaInput={this.atualizaInput}
        /> 

        <GradeDeProdutos 
          listaDeProdutos={produtosOrdenados}
          mudaOrdem={this.mudaOrdem}
          adicionaProduto={this.adicionaProduto}
        />

        <Carrinho
          carrinho={this.state.carrinho}
          removeProduto={this.removeProduto}
        />
        
      </AppDiv>
    )
  }
}

export default App