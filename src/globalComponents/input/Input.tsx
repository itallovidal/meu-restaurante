import { HTMLProps } from 'react'
import * as Styles from './Input.styled.ts'
import { UseFormRegister, FieldValues, Path } from 'react-hook-form'
import InputMask from 'react-input-mask'

interface IInputProps<T extends FieldValues>
  extends HTMLProps<HTMLInputElement> {
  labelName: string
  proportion?: number
  errorMessage?: string
  register: UseFormRegister<T>
  opacity?: number
}

function Input<T extends FieldValues>({
  register,
  errorMessage,
  proportion,
  labelName,
  opacity = 1,
  ...props
}: IInputProps<T>) {
  return (
    <Styles.FieldWrapper $opacity={opacity} $proportion={proportion || 1}>
      <label htmlFor={props.id}>{labelName}</label>
      {props.id === 'data_nascimento' ? (
        <InputMask
          placeholder={'dd/mm/aaaa'}
          {...props}
          {...register(props.id as Path<T>)}
          mask={'99/99/9999'}
        />
      ) : (
        <input {...props} {...register(props.id as Path<T>)} />
      )}

      <span className={errorMessage ? 'errorActive' : undefined}>
        {errorMessage}
      </span>
    </Styles.FieldWrapper>
  )
}

export default Input

// {...register(props.id)}
