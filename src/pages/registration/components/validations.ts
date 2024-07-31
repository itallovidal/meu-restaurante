import { z } from 'zod'

export const cepValidation = z
  .string()
  .max(8, { message: 'Máximo de 8 caracteres.' })
  .regex(/\d{5}\d{3}/, { message: 'Digite um cep válido' })

export const ruaValidation = z
  .string()
  .min(3, { message: 'Mínimo de 3 caracteres.' })

export const bairroValidation = z
  .string()
  .min(3, { message: 'Mínimo de 3 caracteres.' })
