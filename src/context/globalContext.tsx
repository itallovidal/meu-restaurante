import React, { ReactNode } from 'react'
import { postUser } from '../utils/API.ts'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IRestaurant, IUser } from '../@types/interfaces'
import { IAddressForm, IOverviewForm } from '../utils/schemas.ts'

type TPageState = 'address' | 'overview' | 'finish'

export interface IGlobalContext {
  restaurant: IRestaurant
  finishOverview: (data: IOverviewForm) => void
  finishForm: (data: IAddressForm) => void
  concludeForm: () => Promise<boolean>
  setRestaurant: (data: IRestaurant) => void
  userData: IUser
  handleNavigation: (a: TPageState) => void
  navigate: NavigateFunction
}

export const GlobalContext = React.createContext({} as IGlobalContext)

interface GlobalContextProps {
  children: ReactNode
}
function GlobalContextProvider({ children }: GlobalContextProps) {
  const navigate = useNavigate()

  const [restaurant, setRestaurantData] = React.useState<IRestaurant>(
    {} as IRestaurant,
  )
  const [userData, setUserData] = React.useState<IUser>({} as IUser)

  function setRestaurant(data: IRestaurant) {
    setRestaurantData(data)
  }

  function handleNavigation(state: TPageState) {
    if (state !== 'overview') {
      navigate(`/${restaurant.id}/${state}`, {
        state,
      })
      return
    }

    navigate(`/${restaurant.id}`, {})
  }

  function finishOverview(data: IOverviewForm) {
    setUserData((prev) => {
      return { ...prev, ...data }
    })
    console.log('received')

    handleNavigation('address')
  }

  function finishForm(data: IAddressForm) {
    setUserData((prev) => {
      return { ...prev, endereco: { ...data } }
    })

    handleNavigation('finish')
  }

  async function concludeForm() {
    console.log(userData)
    if (restaurant) {
      const response = await postUser(userData, restaurant.collection_id)
      return response.status === 201
    }

    return false
  }

  return (
    <GlobalContext.Provider
      value={{
        navigate,
        handleNavigation,
        restaurant,
        userData,
        finishOverview,
        finishForm,
        concludeForm,
        setRestaurant,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
