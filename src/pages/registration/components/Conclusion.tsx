import * as Styles from '../registration.styled.ts'
import React from 'react'
import { GlobalContext } from '../../../context/globalContext.tsx'
import {
  FacebookLogo,
  Globe,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
  YoutubeLogo,
} from 'phosphor-react'
import loadingGif from '../../../assets/loadingSend.gif'
import { useParams } from 'react-router-dom'

function Conclusion() {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const { concludeForm, politic, userData, navigate } =
    React.useContext(GlobalContext)

  const { id } = useParams()

  async function handleSubmitUser() {
    try {
      setLoading(true)
      await concludeForm()
      setTimeout(function () {
        if (politic.whatsappCommunity) {
          window.location.href = politic.whatsappCommunity
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

      <p>{politic.mensagem_sucesso}</p>

      <Styles.Socials>
        {politic.whatsappCommunity && (
          <>
            <h3> Iremos lhe enviar para o whatsapp já já.</h3>
            <a target="_blank" href={`${politic.whatsappCommunity}`}>
              <WhatsappLogo size={32} weight="light" />
            </a>
          </>
        )}

        {politic.facebook && (
          <a target="_blank" href={`${politic.facebook}`}>
            <FacebookLogo size={32} weight="light" />
          </a>
        )}

        {politic.linkedin && (
          <a target="_blank" href={`${politic.linkedin}`}>
            <LinkedinLogo size={32} weight="light" />
          </a>
        )}

        {politic.youtube && (
          <a target="_blank" href={`${politic.youtube}`}>
            <YoutubeLogo size={32} weight="light" />
          </a>
        )}

        {politic.instagram && (
          <a target="_blank" href={`${politic.instagram}`}>
            <InstagramLogo size={32} weight="light" />
          </a>
        )}

        {politic.siteInstitucional && (
          <a target="_blank" href={`${politic.siteInstitucional}`}>
            <Globe size={32} weight="light" />
          </a>
        )}
      </Styles.Socials>
    </Styles.ConclusionWrapper>
  )
}

export default Conclusion
