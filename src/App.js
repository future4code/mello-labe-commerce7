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
    valorMax: "20000000",
    valorMin: 0, 
    buscaNome: '',
    valorTotal: 0.00,
    listaDeCompras: [],
    atualizou: false   
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
     if (this.state.listaDeCompras.some(produto => produto.id === Number(event.target.id ) ) ) {
         for ( let produto of this.state.listaDeCompras) {
           
           if (produto.id === Number(event.target.id)){
             const novaListaDeCompras =  [...this.state.listaDeCompras]
             novaListaDeCompras.forEach((produto) => {
              if (produto.id === Number(event.target.id)){
                produto.quant = produto.quant +1
              }
             })
             this.setState({
               listaDeCompras: novaListaDeCompras
             })
            }
         }

        } else {
          for (let produto of this.state.listaDeProdutos ) {
              if (produto.id === Number(event.target.id)){
                let produtoSelecionado = {
                  id: produto.id, 
                  name: produto.name,
                  value: produto.value,
                  quant: 1
                }
                
                const novaListaDeCompras = [...this.state.listaDeCompras, produtoSelecionado]
                this.setState({
                  listaDeCompras: novaListaDeCompras 
                })
              }
            
          } 
        } 
        
   
      
  }
   

  removeProduto = (event) => { 
    const listaCarrinhoNova = this.state.listaDeCompras.filter((produto) => {
      return produto.id !== Number(event.target.id)
    })
    this.setState({
      listaDeCompras: listaCarrinhoNova
    })
  }


  mudaValorMinimo = (event) => {
    const novaListaFiltrada = this.state.listaDeProdutos.filter(produto => {
      return produto.value > event.target.value && produto.value < this.state.valorMax
    })
    const novoMinimo = (event.target.value)
    this.setState ({
      valorMin: novoMinimo,
      listaDeProdutosOrdenada: novaListaFiltrada 

    })
  }
 
    
  mudaValorMaximo = (event) => {
    
    if (this.state.valorMax.length === 1 && event.target.value === "") {
      const geraListaOrdenada = (lista) => {
        this.setState ({
          listaDeProdutosOrdenada: lista
        })
      }
      if (this.state.ordem === "crescente") {
        const novaListaOrdenada = this.state.listaDeProdutos.sort((a, b) => {
          return (a.value - b.value)
        })
        geraListaOrdenada(novaListaOrdenada)
      } else {
        const novaListaOrdenada = this.state.listaDeProdutos.sort((a, b) => {
          return (b.value - a.value)
        })
        geraListaOrdenada(novaListaOrdenada)
      }
      
      const novoMaximo = event.target.value
      this.setState ({
        valorMax: novoMaximo
      })
    } else {
        
        const novaListaFiltrada = this.state.listaDeProdutos.filter (produto => {
          return produto.value < event.target.value && produto.value > this.state.valorMin
        })
        const novoMaximo = event.target.value
        this.setState ({
          valorMax: novoMaximo,
          listaDeProdutosOrdenada: novaListaFiltrada
        })
    }
    
  } 

  mudaNome = (event) => {
    const novaListaFiltrada = this.state.listaDeProdutos.filter (produto => {
      const novoNome = event.target.value.toLowerCase() 
       if (produto.name.toLowerCase().includes(novoNome)) {
         return true 
       } else {
         return false
       }
    })
    this.setState ({
      buscaNome: event.target.value,
      listaDeProdutosOrdenada: novaListaFiltrada
    })
    }


  render() { 

    
    return (
      
      <div className="App">

        <Filtro
          mudaValorMinimo={this.mudaValorMinimo}
          mudaValorMaximo={this.mudaValorMaximo}
          mudaNome={this.mudaNome}
        />

        <GradeDeProdutos 
          listaDeProdutosOrdenada={this.state.listaDeProdutosOrdenada}      
          ordem={this.state.ordem}
          mudaOrdem={this.mudaOrdem}
          adicionaProduto={this.adicionaProduto}
        />

        <Carrinho 
          valorTotal={this.state.valorTotal}
          listaDeCompras={this.state.listaDeCompras}
          removeProduto={this.removeProduto}
        />

      </div>  
    )
  }
}

export default App