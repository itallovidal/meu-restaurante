import * as Styles from './footer.styled.ts'
import {
  FacebookLogo,
  Globe,
  InstagramLogo,
  WhatsappLogo,
} from 'phosphor-react'
import React from 'react'
import { GlobalContext } from '../../context/globalContext.tsx'

function Footer() {
  const { restaurant } = React.useContext(GlobalContext)

  return restaurant ? (
    <Styles.Footer>
      <Styles.Content>
        <Styles.SocialMediaWrapper>
          <h3>Redes Sociais</h3>

          <Styles.SocialMediaIcons>
            {restaurant.whatsappCommunity && (
              <a target="_blank" href={`${restaurant.whatsappCommunity}`}>
                <WhatsappLogo size={32} color={'#65B741'} weight="fill" />
              </a>
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
          </Styles.SocialMediaIcons>
        </Styles.SocialMediaWrapper>

        <Styles.Contact>
          <h3>Contate-nos!</h3>
          <span>{restaurant.telefone}</span>

          {restaurant.email && <span>{restaurant.email}</span>}

          {restaurant.siteInstitucional && (
            <span>{restaurant.siteInstitucional}</span>
          )}
        </Styles.Contact>
      </Styles.Content>
    </Styles.Footer>
  ) : null
}

export default Footer
