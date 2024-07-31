import * as Styles from './footer.styled.ts'
import {
  FacebookLogo,
  Globe,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
  YoutubeLogo,
} from 'phosphor-react'
import React from 'react'
import { GlobalContext } from '../../context/globalContext.tsx'

function Footer() {
  const { politic } = React.useContext(GlobalContext)

  return politic ? (
    <Styles.Footer>
      <Styles.Content>
        <Styles.SocialMediaWrapper>
          <h3>Redes Sociais</h3>

          <Styles.SocialMediaIcons>
            {politic.whatsappCommunity && (
              <a target="_blank" href={`${politic.whatsappCommunity}`}>
                <WhatsappLogo size={32} color={'#65B741'} weight="fill" />
              </a>
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
          </Styles.SocialMediaIcons>

          {/* <picture> */}
          {/*    /!*<img src={voteIcon} alt=""/>*!/ */}
          {/* </picture> */}
        </Styles.SocialMediaWrapper>

        <Styles.Contact>
          <h3>Contate-nos!</h3>

          <span>{politic.email}</span>
          <span>{politic.siteInstitucional}</span>
        </Styles.Contact>
      </Styles.Content>
    </Styles.Footer>
  ) : null
}

export default Footer
