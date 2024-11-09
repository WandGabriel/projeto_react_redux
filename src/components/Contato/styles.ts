import styled from 'styled-components'

export const Card = styled.div`
  text-decoration: underline;
  margin-top: 16px;

  ul {
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
  }
`

export const Titulo = styled.h3`
  background-color: #000;
  color: #fff;
  padding-left: 8px;
`

export const Paragrafo = styled.p`
  margin-top: 8px;
`

export const Botao = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  margin-top: 8px;
  padding-right: 32px;
`
