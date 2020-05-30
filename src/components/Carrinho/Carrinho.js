import React, { Component } from "react"
import styled from 'styled-components' 

const CarrinhoDiv = styled.div`
`
const CarrinhoTitulo = styled.h3`
    margin: 5px;
`

const Carrinho = (props) => {

    return(
        <CarrinhoDiv>
            
            <CarrinhoTitulo> Carrinho </CarrinhoTitulo>
               
        </CarrinhoDiv>
                
    )
        

       
}


export default Carrinho