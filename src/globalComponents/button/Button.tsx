import styled from 'styled-components'
import { ArrowFatLineLeft, ArrowFatLineRight } from 'phosphor-react'
import { HTMLProps } from 'react'

interface IButtonBodyProps extends HTMLProps<HTMLButtonElement> {
  $variant: 'primary' | 'secondary'
}

const ButtonBody = styled.button<IButtonBodyProps>`
  padding: ${({ $variant }) => {
    return $variant === 'primary' ? '1rem 2rem' : '1rem'
  }};
  outline: none;
  border: none;
  background-color: ${({ theme, $variant }) => {
    return $variant === 'primary'
      ? theme.COLORS.PRIMARY
      : theme.COLORS.SECONDARY
  }};
  color: ${({ theme, $variant }) => {
    return $variant === 'primary' ? 'white' : theme.COLORS.PRIMARY
  }};

  //margin: 1rem;
  height: auto;

  cursor: pointer;

  display: grid;
  place-items: center;
  grid-auto-flow: column;
  gap: 1rem;

  border-radius: 8px;
`

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: string
  variant: 'primary' | 'secondary'
}

function Button({ children, variant, ...props }: ButtonProps) {
  if (variant === 'primary') {
    return (
      <ButtonBody {...props} $variant={variant}>
        {' '}
        {children} <ArrowFatLineRight size={16} weight="fill" />{' '}
      </ButtonBody>
    )
  }

  if (variant === 'secondary') {
    return (
      <ButtonBody {...props} $variant={variant}>
        {' '}
        <ArrowFatLineLeft size={18} weight="fill" />{' '}
      </ButtonBody>
    )
  }
}

export default Button
