import * as Styles from './registration.styled.ts'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/globalContext.tsx'
import React from 'react'
import Footer from '../../globalComponents/footer/Footer.tsx'
import { getPolitic } from '../../utils/API.ts'
import ErrorPage from '../notFound/errorPage.tsx'
import Loading from '../../globalComponents/loading/loading.tsx'
import placeholder from '../../assets/profilePicturePlaceholder.jpg'

function Registration() {
  const { id } = useParams()
  const { state } = useLocation()
  const { politic, setPoliticData } = React.useContext(GlobalContext)
  const [error, setError] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (id) {
      getPolitic(id)
        .then((data) => {
          setPoliticData(data)
        })
        .catch((e) => {
          console.log(e)
          setError(true)
        })
    }
  }, [id])

  if (error) {
    return <ErrorPage errorType={'idNotFound'} />
  }

  return (
    <Styles.ContentWrapper>
      <Styles.Content>
        <Styles.FormWrapper>
          <Styles.Header>
            <h1>Cadastramento</h1>
            <h3>Precisaremos de algumas informações.</h3>
          </Styles.Header>

          <Styles.FormStatus
            step={state === null ? 1 : state === 'address' ? 2 : 3}
          >
            <span>Dados Gerais</span>
            <span>Endereço</span>
            <span>Agradecimento</span>
          </Styles.FormStatus>

          {politic.id ? <Outlet /> : <Loading />}
        </Styles.FormWrapper>
        <Styles.BannerWrapper>
          <picture>
            <img
              className={politic.profile_image ? '' : 'loading'}
              src={politic.profile_image ? politic.profile_image : placeholder}
              alt=""
            />
          </picture>

          <label htmlFor="">
            {politic.nome ? politic.nome : 'carregando..'}
          </label>
        </Styles.BannerWrapper>
      </Styles.Content>
      <Footer />
    </Styles.ContentWrapper>
  )
}

export default Registration
