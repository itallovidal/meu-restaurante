import * as Styles from './errorPage.styled.ts'
import notFound from '../../assets/notFound.svg'
import qrcodeerror from '../../assets/qrcodeerror.svg'

interface errorPageProps {
  errorType: '404' | 'idNotFound'
}

const errorSchema = {
  '404': {
    header: <h2>Rota não encontrada.</h2>,
    paragraph: (
      <p>Parece que você está tentado acessar uma página que não existe.</p>
    ),
    imagePath: notFound,
  },
  idNotFound: {
    header: <h2>QR Incorreto.</h2>,
    paragraph: <p>O QR está errado, ou a rota é inexistente.</p>,
    imagePath: qrcodeerror,
  },
}
function ErrorPage({ errorType }: errorPageProps) {
  return (
    <Styles.Wrapper>
      <h1>
        <b>OPS!</b>
      </h1>
      {errorSchema[errorType].header}
      {errorSchema[errorType].paragraph}

      <picture>
        <img src={errorSchema[errorType].imagePath} alt="" />
      </picture>
    </Styles.Wrapper>
  )
}

export default ErrorPage
