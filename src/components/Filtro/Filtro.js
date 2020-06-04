import React from 'react'
import styled from 'styled-components'

const FiltroDiv = styled.div`
  padding: 10px;
`
const FiltroTitulo = styled.h3 `
`
const FormInput = styled.form`
`
const Filtro = (props) => {
  const {atualizaInput} = props
    
  return (
    <FiltroDiv>
      <FiltroTitulo> Filtro </FiltroTitulo>
        <FormInput>
          <label htmlFor="valorMin">Valor Minimo:</label>
          <input 
            name="valorMin"
            id="valorMin"
            type="number"
            min={0}
            onChange={atualizaInput}
          />
        </FormInput>

        <FormInput>
          <label htmlFor="valorMax">Valor Máximo:</label>
          <input 
            name="valorMax"
            id="valorMax"
            type="number"
            min={0}
            onChange={atualizaInput}
          />
        </FormInput>

        <FormInput>
          <label htmlFor="textoBusca">Buscar Produto:</label>
          <input 
            name="textoBusca"
            id="textoBusca"
            type="text"
            onChange={atualizaInput}
          />
        </FormInput>

    </FiltroDiv>  
  )    
}

export default Filtro