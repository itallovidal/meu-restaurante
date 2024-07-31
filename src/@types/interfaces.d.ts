import { IAddressForm } from '../pages/registration/components/AddressForm.tsx'
import { IOverviewForm } from '../utils/schemas.ts'

export interface IUser extends IOverviewForm {
  endereco: IAddressForm
}

declare module 'react-input-mask'

export interface IPolitic {
  nome: string
  profile_image: string
  id: string
  collection_id: string
  email: string
  siteInstitucional: string | null
  facebook: string | null
  linkedin: string | null
  youtube: string | null
  instagram: string | null
  whatsappCommunity: string | null
  mensagem_sucesso: string
}
