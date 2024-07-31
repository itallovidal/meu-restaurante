import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  height: 30vh;

  @media (max-width: 739px) {
    height: auto;
  }
`

export const Content = styled.div`
  width: 80%;
  max-width: 56.25rem;
  margin: 0 auto;
  color: white;

  display: grid;
  grid-template-columns: 15rem 1fr;

  @media (max-width: 739px) {
    grid-template-columns: 1fr;
  }
`

export const SocialMediaWrapper = styled.div`
  position: relative;
  padding: 2rem 2rem 2rem 0;

  h3 {
    margin-bottom: 0.5rem;
  }

  picture {
    margin-top: 1.5rem;
    display: block;
  }

  &:before {
    position: absolute;
    right: 0;
    width: 5px;
    height: 25%;
    background-color: white;
    content: '';
  }

  @media (max-width: 739px) {
    &:before {
      left: 0;
      bottom: 0;
      width: 25%;
      height: 5px;
    }
  }
`

export const SocialMediaIcons = styled.div`
  gap: 1rem;
  display: flex;

  a {
    color: white;
  }
`

export const Contact = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 739px) {
    padding-inline: 0;
  }
`
