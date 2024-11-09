import * as S from './styles'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { BsPencilSquare, BsTrash } from 'react-icons/bs'

const Contato = () => (
  <S.Card>
    <S.Titulo>
      <div>Wanderson Gabriel da Silva</div>
    </S.Titulo>
    <S.Paragrafo>
      <AiOutlinePhone />
      (99) 99999-9999
    </S.Paragrafo>
    <S.Paragrafo>
      <AiOutlineMail /> teste.email@hotmail.com
    </S.Paragrafo>
    <ul>
      <S.Botao type="button">
        <BsPencilSquare />
        Editar
      </S.Botao>
      <S.Botao type="button">
        <BsTrash />
        Excluir
      </S.Botao>
    </ul>
  </S.Card>
)

export default Contato
