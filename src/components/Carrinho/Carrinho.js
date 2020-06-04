import React from "react"
import styled from 'styled-components' 

const CarrinhoDiv = styled.div`
`
const CarrinhoTitulo = styled.h3`
    margin: 5px;
`
const Carrinho = (props) => {
    const {carrinho, removeProduto} = props

    return(
        <CarrinhoDiv>
            
            <CarrinhoTitulo> Carrinho </CarrinhoTitulo>

            {carrinho.map((produto) => {
               return (
                <div key={produto.produtoInfo.name}>
                    {produto.quantidade} X 
                    {produto.produtoInfo.name}
                    <span onClick={() => removeProduto(produto)}> X </span>
                </div>
               )
            })}
            <p>
                Total: R$ 
                {(carrinho.reduce((contador, produto) => {
                    return contador += produto.produtoInfo.value * produto.quantidade
                },0)).toFixed(2)}
            </p>  
        </CarrinhoDiv>          
    )      
}


export default Carrinho