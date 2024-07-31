import * as Styles from '../registration.styled.ts'
import React from 'react'
import { GlobalContext } from '../../../context/globalContext.tsx'
import {
  FacebookLogo,
  Globe,
  InstagramLogo,
  WhatsappLogo,
} from 'phosphor-react'
import loadingGif from '../../../assets/loadingSend.gif'
import { useParams } from 'react-router-dom'

function Conclusion() {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const { concludeForm, restaurant, userData, navigate } =
    React.useContext(GlobalContext)

  const { id } = useParams()

  async function handleSubmitUser() {
    try {
      setLoading(true)
      await concludeForm()
      setTimeout(function () {
        if (restaurant.whatsappCommunity) {
          window.location.href = restaurant.whatsappCommunity
        }
      }, 5000)
    } catch (e) {
      console.log(e)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    if (!userData.endereco) {
      navigate(`/${id}`)
    }

    handleSubmitUser()
  }, [])

  if (loading) return <Styles.LoadingGif src={loadingGif} />

  if (error) return <p>Ops, algo de errado aconteceu.</p>

  return (
    <Styles.ConclusionWrapper>
      <p>Sucesso!!</p>

      <p>{restaurant.mensagem_sucesso}</p>

      <Styles.Socials>
        {restaurant.whatsappCommunity && (
          <>
            <h3> Iremos lhe enviar para o whatsapp já já.</h3>
            <a target="_blank" href={`${restaurant.whatsappCommunity}`}>
              <WhatsappLogo size={32} weight="light" />
            </a>
          </>
        )}

        {restaurant.facebook && (
          <a target="_blank" href={`${restaurant.facebook}`}>
            <FacebookLogo size={32} weight="light" />
          </a>
        )}

        {restaurant.instagram && (
          <a target="_blank" href={`${restaurant.instagram}`}>
            <InstagramLogo size={32} weight="light" />
          </a>
        )}

        {restaurant.siteInstitucional && (
          <a target="_blank" href={`${restaurant.siteInstitucional}`}>
            <Globe size={32} weight="light" />
          </a>
        )}
      </Styles.Socials>
    </Styles.ConclusionWrapper>
  )
}

export default Conclusion
