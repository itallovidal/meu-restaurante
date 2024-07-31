import { createGlobalStyle, keyframes } from 'styled-components'

export const show = keyframes`
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body, label, input, button, textarea{
    font-family: ${({ theme }) => theme.FONT.PRIMARY};
  }
  
  main{
    opacity: 0;
    animation: ${show} 500ms forwards;
  }
`
