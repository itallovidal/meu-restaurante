import * as Styles from '../registration.styled.ts'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../../../globalComponents/input/Input.tsx'
import Button from '../../../globalComponents/button/Button.tsx'
import React from 'react'
import { GlobalContext } from '../../../context/globalContext.tsx'
import { cepValidation, ruaValidation } from './validations.ts'
import { addressSchema, IAddressForm } from '../../../utils/schemas.ts'
import { useParams } from 'react-router-dom'

function AddressForm() {
  const { finishForm, userData, handleNavigation, navigate } =
    React.useContext(GlobalContext)
  const {
    register,
    setError,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm<IAddressForm>({
    resolver: zodResolver(addressSchema),
  })
  const { id } = useParams()

  const opcty = dirtyFields.cep || dirtyFields.rua ? 1 : 0.3

  React.useEffect(() => {
    console.log(userData)
    if (!userData.nome) {
      navigate(`/${id}`)
    }
  }, [])

  function handleStep(data: IAddressForm) {
    if (data.cep && data.cep?.length > 0) {
      const cepResult = cepValidation.safeParse(data.cep)

      if (!cepResult.success) {
        const errorMsg = JSON.parse(cepResult.error.message)[0].message
        setError('cep', { type: 'custom', message: errorMsg })
        return
      }
    }

    if (data.rua && data.rua?.length > 0) {
      const ruaResult = ruaValidation.safeParse(data.rua)
      if (!ruaResult.success) {
        const errorMsg = JSON.parse(ruaResult.error.message)[0].message
        setError('rua', { type: 'custom', message: errorMsg })
        return
      }
    }

    // if (data.bairro && data.bairro?.length > 0) {
    //   const bairroResult = bairroValidation.safeParse(data.bairro)
    //
    //   if (!bairroResult.success) {
    //     const errorMsg = JSON.parse(bairroResult.error.message)[0].message
    //     setError('bairro', { type: 'custom', message: errorMsg })
    //     return
    //   }
    // }

    finishForm(data)
  }

  return (
    <Styles.Form onSubmit={(event) => event.preventDefault()}>
      <Styles.FieldSet>
        <Input<IAddressForm>
          register={register}
          errorMessage={errors.cidade?.message}
          proportion={2}
          labelName={'Cidade'}
          type={'text'}
          id={'cidade'}
          placeholder={'Ex.: Rio de Janeiro'}
        />

        <Input<IAddressForm>
          register={register}
          errorMessage={errors.uf?.message}
          proportion={1}
          labelName={'UF'}
          type={'text'}
          id={'uf'}
          maxLength={2}
          placeholder={'Ex.: RJ'}
        />
      </Styles.FieldSet>

      <Styles.FieldSet>
        <Input<IAddressForm>
          register={register}
          errorMessage={errors.bairro?.message}
          labelName={'Bairro'}
          type={'text'}
          id={'bairro'}
          placeholder={'Ex.: Qual seu bairro?'}
        />

        <Input<IAddressForm>
          register={register}
          errorMessage={errors.cep?.message}
          labelName={'CEP (Opcional)'}
          type={'text'}
          id={'cep'}
          maxLength={8}
          opacity={opcty}
          placeholder={'Ex.: 21320340'}
        />
      </Styles.FieldSet>

      <Styles.FieldSet>
        <Input<IAddressForm>
          register={register}
          errorMessage={errors.rua?.message}
          proportion={4}
          labelName={'Rua (Opcional)'}
          type={'text'}
          id={'rua'}
          opacity={opcty}
          placeholder={'Ex.: Rua santo antônio'}
        />

        <div id={'container_button'}>
          <Button
            onClick={() => {
              console.log('a')
              handleNavigation('overview')
            }}
            type={'button'}
            variant={'secondary'}
          >
            Voltar
          </Button>
          <Button
            onClick={() => handleSubmit(handleStep)()}
            type={'button'}
            variant={'primary'}
          >
            Avançar
          </Button>
        </div>
      </Styles.FieldSet>
    </Styles.Form>
  )
}

export default AddressForm
