import React, { Component } from 'react'

class GradeDeProdutos extends Component {
    

    render() { 
        
        // Renderização por map() do array ordenado
        const produtosLi = this.props.listaDeProdutosOrdenada.map(produto => {
            return (
            <li key={produto.id}>
                <img src={produto.imageUrl} alt="produto" />
                <p>{produto.name}</p>
                <p>R${produto.value}</p>
                <button id={produto.id} onClick={this.props.adicionaProduto}>Colocar no carrinho</button>
            </li>
            )
        })

        return (
                <div className="Produtos">
                <p>Quantidade de produtos: {this.props.listaDeProdutosOrdenada.length}</p>

                <select value={this.props.ordem} onChange={this.props.mudaOrdem}> 
                    <option value="crescente">Valor Crescente</option>
                    <option value="decrescente">Valor Decrescente</option>
                </select>

                <ul>
                    {produtosLi}  
                </ul>
            </div>
        )
        

    }

}

export default GradeDeProdutos