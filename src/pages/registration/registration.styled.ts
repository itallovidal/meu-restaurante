import styled, { keyframes } from 'styled-components'
import { show } from '../../styles/global.styled.ts'

export const ContentWrapper = styled.main`
  overflow: hidden;
  height: 100vh;

  @media (max-width: 739px) {
    padding: 0;
    height: auto;
  }
`

export const Content = styled.article`
  width: 100%;
  padding-inline: 2.5%;
  max-width: 56.25rem;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  justify-content: space-between;
  height: 70vh;
  align-items: center;

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    position: relative;
  }

  @media (max-width: 739px) {
    gap: 0;
    width: 90%;
    height: auto;
  }
`

export const Header = styled.header`
  margin-bottom: 2rem;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-block: 0;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: normal;
    padding-bottom: 1rem;

    position: relative;
    margin-bottom: 1rem;

    &:before {
      position: absolute;
      content: '';
      bottom: 0;
      width: 25%;
      height: 5px;
      background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }

  @media (max-width: 739px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`

interface FormStatusProps {
  step: 1 | 2 | 3
}
export const FormStatus = styled.div<FormStatusProps>`
  position: absolute;
  left: -12rem;
  width: 10rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;

  @media (max-width: 1200px) {
    position: initial;
    flex-direction: row;
    width: 100%;
    margin-bottom: 2rem;
  }

  span {
    opacity: 0.2;
    transition: 400ms;
  }
  span:nth-child(${({ step }) => step}) {
    opacity: 1;
  }
`
export const FormWrapper = styled.div`
  position: relative;

  @media (max-width: 1020px) {
    grid-row: 1/2;
  }
`

const pulse = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

export const LoadingGif = styled.img`
  height: 200px;
  width: 100%;
  object-fit: contain;
  opacity: 0.2;
`

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 2rem;
  gap: 1rem;
  max-width: 14.125rem;

  .loading {
    animation: ${pulse} 4000ms infinite;
  }

  picture {
    max-width: 300px;
    max-height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media (min-width: 740px) and (max-width: 1020px) {
    grid-row: 1/2;
    position: absolute;
    top: -5%;
    align-items: flex-end;
    right: 0;

    picture {
      display: block;
      overflow: initial;
      width: 6rem;
      height: 6rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  @media (max-width: 739px) {
    margin: 0 auto;
  }

  picture {
    overflow: hidden;
    border-radius: 8px;
  }

  label {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    padding: 1rem;
    color: white;
    width: 100%;
    text-align: center;
    border-radius: 5px;
  }
`

// -----------------------------------------

export const FieldSet = styled.fieldset`
  border: none;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 0;
  justify-content: space-between;

  #rua,
  #cidade {
    text-transform: capitalize;
  }

  #container_button {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }

  button {
    margin-top: calc(1.15rem + 1rem);
    margin-right: 0;
  }

  @media (max-width: 739px) {
    flex-direction: column;
    gap: 0;

    div {
      width: 100% !important;
    }
  }
`

export const Form = styled.form`
  opacity: 0;
  transform: translateY(10px);

  animation: ${show} 400ms 400ms forwards;
`
// -------------------------

export const ConclusionWrapper = styled.main`
  p {
    margin-bottom: 2rem;
  }
`

export const Socials = styled.main`
  a {
    color: black;
  }

  h3 {
    margin-bottom: 1rem;
  }
`
