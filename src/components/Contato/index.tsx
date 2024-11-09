import { useState } from 'react'
import * as S from './styles'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { BsPencilSquare, BsTrash } from 'react-icons/bs'

type Props = {
  nome: string
  email: string
  telefone: number
}

const Contato = ({ nome, email, telefone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>
        <div>{nome}</div>
      </S.Titulo>
      <S.Paragrafo>
        <AiOutlinePhone />
        {telefone}
      </S.Paragrafo>
      <S.Paragrafo>
        <AiOutlineMail /> {email}
      </S.Paragrafo>
      <ul>
        {estaEditando ? (
          <>
            <S.Botao>
              <BsPencilSquare />
              Salvar
            </S.Botao>
            <S.Botao type="button" onClick={() => setEstaEditando(false)}>
              <BsTrash />
              Cancelar
            </S.Botao>
          </>
        ) : (
          <>
            <S.Botao type="button" onClick={() => setEstaEditando(true)}>
              <BsPencilSquare />
              Editar
            </S.Botao>
            <S.Botao type="button">
              <BsTrash />
              Excluir
            </S.Botao>
          </>
        )}
      </ul>
    </S.Card>
  )
}

export default Contato
