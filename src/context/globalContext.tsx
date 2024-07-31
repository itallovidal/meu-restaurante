import React, { ReactNode } from 'react'
import { postUser } from '../utils/API.ts'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IPolitic, IUser } from '../@types/interfaces'
import { IAddressForm, IOverviewForm } from '../utils/schemas.ts'

type TPageState = 'address' | 'overview' | 'finish'

export interface IGlobalContext {
  politic: IPolitic
  finishOverview: (data: IOverviewForm) => void
  finishForm: (data: IAddressForm) => void
  concludeForm: () => Promise<boolean>
  setPoliticData: (data: IPolitic) => void
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

  const [politic, setPolitic] = React.useState<IPolitic>({} as IPolitic)
  const [userData, setUserData] = React.useState<IUser>({} as IUser)

  function setPoliticData(data: IPolitic) {
    setPolitic(data)
  }

  function handleNavigation(state: TPageState) {
    if (state !== 'overview') {
      navigate(`/${politic.id}/${state}`, {
        state,
      })
      return
    }

    navigate(`/${politic.id}`, {})
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
    if (politic) {
      const response = await postUser(userData, politic.collection_id)
      return response.status === 201
    }

    return false
  }

  return (
    <GlobalContext.Provider
      value={{
        navigate,
        handleNavigation,
        politic,
        userData,
        finishOverview,
        finishForm,
        concludeForm,
        setPoliticData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
