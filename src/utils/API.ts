import { IRestaurant, IUser } from '../@types/interfaces'
import { api } from './axiosConfig.ts'
import { AxiosError } from 'axios'

export async function postUser(data: IUser, collection_id: string) {
  return await api.post(`client/register/${collection_id}`, data, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export async function getRestaurant(id: string): Promise<IRestaurant> {
  try {
    const { data } = await api.get(`/contractor/${id}`)
    return data
  } catch (e: any) {
    if (e instanceof AxiosError) {
      if (e.response) {
        throw new Error(e.response.data.message)
      }
    }

    throw new Error(e)
  }
}
