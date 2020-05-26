import './App.css';
import React, { Component } from 'react'

class App extends Component {

state = {
  ordem: "crescente",
  listaDeProdutos: [
    {id: 1, 
    name: "objeto1",
    value: 10.55, 
    imageUrl: "https://picsum.photos/700/800"}, 
    {id: 2, 
    name: "objeto2",
    value: 20.78, 
    imageUrl: "https://picsum.photos/700/800"}, 
    {id: 3, 
    name: "objeto3",
    value: 100.32, 
    imageUrl: "https://picsum.photos/700/800"},
    {id: 4, 
    name: "objeto4",
    value: 90.28,
    imageUrl: "https://picsum.photos/700/800"}, 
    {id: 5, 
    name: "objeto5",
    value: 56.45, 
    imageUrl: "https://picsum.photos/700/800"}, 
    {id: 6, 
    name: "objeto6",
    value: 80.57,
    imageUrl: "https://picsum.photos/700/800"}],
    listaDeProdutosOrdenada: []
}

componentDidMount = () => {
  let novaListaOrdenada = [...this.state.listaDeProdutos]
  this.setState ({listaDeProdutosOrdenada: novaListaOrdenada})
}

mudaOrdem = (event) => {
  if (event.target.value === "crescente") {
    const novaListaOrdenada = this.state.listaDeProdutosOrdenada.sort(function (a,b) {
      return (a.value - b.value)})
    this.setState ({ordem: "crescente", listaDeProdutosOrdenada: novaListaOrdenada})
  } else {
    const novaListaOrdenada = this.state.listaDeProdutosOrdenada.sort(function (a,b) {
      return (b.value - a.value)})
      this.setState ({ordem: "decrescente", listaDeProdutosOrdenada: novaListaOrdenada})
}
}

render() { 
        
  const produtosLi = this.state.listaDeProdutosOrdenada.map(produto => {
   return (
    <li>
      <img src={produto.imageUrl} />
      <p>{produto.name}</p>
      <p>R${produto.value}</p>
      <button>Colocar no carrinho</button>
    </li>
   )
  }
  )
  
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