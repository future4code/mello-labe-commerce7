import React from 'react'
import styled from 'styled-components'
import CardProduto from '../CardProduto/CardProduto'

const GradeDeProdutosDiv = styled.div`
    padding: 10px;
`
const GradeDeProdutosHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
const HeaderTitulo = styled.h4`
`
const SelectOrdem = styled.select`
`
const CardGridProduto = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
const GradeDeProdutos = (props) => {
    const {listaDeProdutos, mudaOrdem, adicionaProduto} = props 
    
    return (
        <GradeDeProdutosDiv>
            <GradeDeProdutosHeader>
                <HeaderTitulo>Quantidade de Produtos: {listaDeProdutos.length} </HeaderTitulo>
                <SelectOrdem onChange={mudaOrdem}>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </SelectOrdem>
            </GradeDeProdutosHeader>
            <CardGridProduto>
                {listaDeProdutos.map((produto) => (
                    <CardProduto 
                        key={produto.name}
                        produto={produto}
                        adicionaProduto={adicionaProduto}
                    />
                ))}  
            </CardGridProduto>
            
        </GradeDeProdutosDiv>   
    )    
}


export default GradeDeProdutos