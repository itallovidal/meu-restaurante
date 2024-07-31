import { z } from 'zod'

// primeira página
const emailValidation = z.string().email()

export const overviewSchema = z.object({
  nome: z.string().min(3, { message: 'Mínimo de 3 caracteres.' }),
  sobrenome: z.string().min(3, { message: 'Mínimo de 3 caracteres.' }),
  data_nascimento: z
    .string()
    .nonempty('Não deixe em branco!')
    .refine(
      (data) => {
        const dia = Number(data.substring(0, 2))
        return !(dia < 0 || dia > 31 || isNaN(dia))
      },
      { message: 'Adicione um dia válido.' },
    )
    .refine(
      (data) => {
        const mes = Number(data.substring(3, 5))
        return !(mes < 0 || mes > 12 || isNaN(mes))
      },
      { message: 'Adicione um mês válido.' },
    )
    .refine(
      (data) => {
        const ano = Number(data.substring(6, 10))
        return !(ano < 0 || ano > 2024 || isNaN(ano))
      },
      { message: 'Adicione um ano válido.' },
    ),
  email: z.string().refine(
    (a) => {
      if (a === '') return true
      const validation = emailValidation.safeParse(a)
      return validation.success
    },
    {
      message: 'OBS.: O email deve conter @ + email + .com',
    },
  ),
  telefone: z
    .string()
    .nonempty({ message: 'Digite o número de celular.' })
    .regex(/^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}-[0-9]{4}$/, {
      message: 'Número inválido.',
    }),
})

export interface IOverviewForm extends z.infer<typeof overviewSchema> {}

/// /// /// ///

export const addressSchema = z.object({
  cep: z.string().optional(),
  bairro: z
    .string({
      required_error: 'Por favor, digite seu bairro',
    })
    .min(4, {
      message: 'Bairro muito pequeno.',
    }),
  rua: z.string().optional(),
  cidade: z.string().nonempty({ message: 'Por favor, coloque a cidade.' }),
  uf: z
    .string({
      required_error: 'Escreva o uf',
    })
    .min(2, { message: 'Mínimo de 2 caracteres.' })
    .max(2, { message: 'Máximo de 2 caracteres.' }),
})

// interface inferida do addressSchema
export interface IAddressForm extends z.infer<typeof addressSchema> {}
