import React from 'react'
import styled from 'styled-components'


const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    border: 2px dotted orange;
    padding: 7px;
    > img {
        width: 100%; 
    }

    > p {
        margin: 10px 0px;
    }

    > button {
        width: 100%;
        height: 30px;
        background-color: black;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        :hover {
            background-color: orange;
        }
    }
`



const CardProduto = (props) => {

    const {produto, adicionaProduto} = props

    return (
        <CardDiv>
            <img src={produto.imageUrl} alt="produto" />
            <p>R$ {produto.value}</p>
            <p>{produto.name}</p>
            <button onClick={() => adicionaProduto(produto)}>Adicionar ao Carrinho</button>    
        </CardDiv>
    )
}

export default CardProduto