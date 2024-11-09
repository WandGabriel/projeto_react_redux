import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const FiltroCard = (props: Props) => <S.Card ativo={props.ativo}>A</S.Card>

export default FiltroCard
