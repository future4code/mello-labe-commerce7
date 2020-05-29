import React, { Component } from "react"

class Carrinho extends Component {

    atualizaTotal = () => {
        
        if (this.props.listaDeCompras.length === 0) {
            return 0
        } else {
            return this.props.listaDeCompras.reduce((total, produto) => {
                return total + produto.quant * produto.value
            }, 0)
        }
        
    }
       

    render () {
        const listaCarrinhoLi = this.props.listaDeCompras.map((produto) => {
            return(

                <li className="listaCarrinho">
                    
                    <span>{produto.quant}x </span>  
                    <span>{produto.name}</span> 
                    <span id={produto.id} className="itemX" onClick={this.props.removeProduto}>x</span>  
                </li>
            )
        })

        const valorTotal = this.atualizaTotal()

        return (
            <div className="Carrinho">
                <h3>Carrinho:</h3>
                <ul>
                    {listaCarrinhoLi}

                </ul>
                <p>Total: R${valorTotal.toFixed(2)}</p>
            </div>
        )
    }
}

export default Carrinho