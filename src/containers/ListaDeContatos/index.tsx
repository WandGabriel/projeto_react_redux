import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'
import { CardContato } from './style'

const contatos = [
  {
    nome: 'Bruno Lacerda',
    telefone: 99999999999,
    email: 'teste@mail.com'
  },
  {
    nome: 'Lucas Mito',
    telefone: 88888888888,
    email: 'lucas@mail.com'
  },
  {
    nome: 'Glória Maria',
    telefone: 77777777777,
    email: 'gloramaria@mail.com'
  }
]

const ListaDeContatos = () => (
  <MainContainer>
    <ul>
      <CardContato>
        {contatos.map((agenda) => (
          <li key={agenda.nome}>
            <Contato
              nome={agenda.nome}
              email={agenda.email}
              telefone={agenda.telefone}
            />
          </li>
        ))}
      </CardContato>
    </ul>
  </MainContainer>
)

export default ListaDeContatos
