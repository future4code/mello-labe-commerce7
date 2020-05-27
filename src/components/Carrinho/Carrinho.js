import React, { Component } from "react"

class Carrinho extends Component {

    state = {
        listaDeCompras : [{id:10, name:"produto1",value:11.50, quant:3},{id:11, name:"produto3",value:15.50, quant:3}]
    }

    render () {
        const listaCarrinhoLi = this.state.listaDeCompras.map((produto) => {
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