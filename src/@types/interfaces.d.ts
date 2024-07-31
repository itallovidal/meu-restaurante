import { IAddressForm } from '../pages/registration/components/AddressForm.tsx'
import { IOverviewForm } from '../utils/schemas.ts'

export interface IUser extends IOverviewForm {
  endereco: IAddressForm
}

declare module 'react-input-mask'

export interface IRestaurant {
  nome: string
  profile_image: string
  id: string
  collection_id: string
  email: string
  siteInstitucional: string | null
  facebook: string | null
  instagram: string | null
  whatsappCommunity: string | null
  mensagem_sucesso: string
}
