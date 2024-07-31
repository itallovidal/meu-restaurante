import styled from 'styled-components'

export const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    margin-bottom: 0;
    font-size: 4rem;
    font-weight: normal;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 3rem;
  }

  p {
    font-size: 1.4rem;
  }

  picture {
    margin-top: 2rem;
    display: block;

    img {
      object-fit: cover;
      height: 50vh;
      width: 100%;
    }
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(247, 247, 247, 0.85);
    clip-path: polygon(29% 0, 74% 44%, 48% 66%, 76% 100%, 0 100%, 0 0);
    z-index: -1;
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1rem;
      width: 80%;
      margin: 0 auto;
    }
  }
`
