import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'
import { CardContato } from './style'

const ListaDeContatos = () => (
  <MainContainer>
    <ul>
      <li>
        <CardContato>
          <Contato />
          <Contato />
          <Contato />
          <Contato />
        </CardContato>
      </li>
    </ul>
  </MainContainer>
)

export default ListaDeContatos
