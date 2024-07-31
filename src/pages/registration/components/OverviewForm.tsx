import Button from '../../../globalComponents/button/Button.tsx'
import Input from '../../../globalComponents/input/Input.tsx'
import * as Styles from '../registration.styled.ts'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { GlobalContext } from '../../../context/globalContext.tsx'
import { mascaraTelefone } from '../../../utils/inputMasks.ts'
import { IOverviewForm, overviewSchema } from '../../../utils/schemas.ts'

function OverviewForm() {
  const { finishOverview, userData } = React.useContext(GlobalContext)
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
    setValue,
  } = useForm<IOverviewForm>({
    resolver: zodResolver(overviewSchema),
  })

  function handleStep(data: IOverviewForm) {
    finishOverview(data)
  }

  React.useEffect(() => {
    const tel = document.querySelector<HTMLInputElement>('#telefone')!

    tel.addEventListener('keypress', function (this: HTMLInputElement) {
      mascaraTelefone(this, tel)
    }) // Dispara quando digitado no campo

    tel.addEventListener('change', function (this: HTMLInputElement) {
      mascaraTelefone(this, tel)
    })

    if (userData.nome) {
      // console.log(userData.data_nascimento.split('/').join(''))
      setValue('data_nascimento', userData.data_nascimento.split('/').join(''))
      setValue('nome', userData.nome)
      setValue('email', userData.email)
      setValue('telefone', userData.telefone)
      setValue('sobrenome', userData.sobrenome)
    }
  }, [])

  return (
    <Styles.Form onSubmit={handleSubmit(handleStep)}>
      <Styles.FieldSet>
        <Input<IOverviewForm>
          register={register}
          errorMessage={errors.nome?.message}
          labelName={'Nome'}
          type={'text'}
          id={'nome'}
          placeholder={'Ex.: João'}
        />

        <Input<IOverviewForm>
          register={register}
          errorMessage={errors.sobrenome?.message}
          labelName={'Sobrenome'}
          type={'text'}
          id={'sobrenome'}
          placeholder={'Ex.: Silva'}
        />
      </Styles.FieldSet>

      <Styles.FieldSet>
        <Input<IOverviewForm>
          register={register}
          errorMessage={errors.data_nascimento?.message}
          proportion={1}
          labelName={'Data de Nascimento'}
          id={'data_nascimento'}
        />

        <Input<IOverviewForm>
          register={register}
          errorMessage={errors.telefone?.message}
          proportion={1}
          labelName={'Telefone'}
          type={'text'}
          maxLength={15}
          id={'telefone'}
          placeholder={'Ex.: (21) 99999-9999'}
        />
      </Styles.FieldSet>

      <Styles.FieldSet>
        <Input<IOverviewForm>
          opacity={dirtyFields.email ? 1 : 0.6}
          register={register}
          errorMessage={errors.email?.message}
          proportion={3}
          labelName={'Email'}
          type={'text'}
          id={'email'}
          placeholder={'Ex.: email123@gmail.com'}
        />

        <div id={'container_button'}>
          <Button type={'submit'} variant={'primary'}>
            Avançar
          </Button>
        </div>
      </Styles.FieldSet>
    </Styles.Form>
  )
}

export default OverviewForm
