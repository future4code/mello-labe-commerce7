import React, { Component } from "react"

class Carrinho extends Component {

    state = {
        listaDeCompras : []
    }

    

    render () {
        const listaCarrinhoLi = this.props.listaDeCompras.map((produto) => {
            return(

                <li key={produto.id}>
                    {produto.quant}
                    {produto.name}
                    <span>x</span>
                </li>
            )
        })

        return (
            <div className="Carrinho">
                <h3>Carrinho:</h3>
                <ul>
                    {listaCarrinhoLi}

                </ul>
                <p>Total: R${this.props.valorTotal.toFixed(2)}</p>
            </div>
        )
    }
}

export default Carrinho