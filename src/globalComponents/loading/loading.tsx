import * as Styles from './loading.styled.ts'
import loadingGif from '../../assets/loading.gif'

function Loading() {
  return (
    <Styles.Wrapper>
      <h2>Carregando informações..</h2>

      <picture>
        <img src={loadingGif} alt="" />
      </picture>
    </Styles.Wrapper>
  )
}

export default Loading
