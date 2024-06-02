import { instance } from '@/lib/axios'
import {
  PostRecipientsCreate,
  PostRecipientsReactionsCreate,
  PostRecipientsMessagesCreateData
} from '@/types/recipients'

export const getRecipientsList = async (limit?: number, offset?: number) => {
  const res = await instance.get('recipients/', { params: { limit, offset } })
  return res.data
}

export const postRecipientsCreate = async (value: PostRecipientsCreate) => {
  const res = await instance.post('recipients/', value)
  return res.data
}

export const getRecipientsRead = async (id: string) => {
  const res = await instance.get(`recipients/${id}/`)
  return res.data
}

export const deleteRecipientsDelete = async (id: string) => {
  const res = await instance.get(`recipients/${id}/`)
  return res.data
}

export const getRecipientsMessagesList = async (
  id: string,
  limit?: number,
  offset?: number
) => {
  const res = await instance.get(`recipients/${id}/messages/`, {
    params: { limit, offset }
  })
  return res.data
}

export const postRecipientsMessagesCreate = async (
  id: string,
  value: PostRecipientsMessagesCreateData
) => {
  const res = await instance.post(`recipients/${id}/messages/`, value)
  return res.data
}

export const getRecipientsReactionsList = async (
  id: string,
  limit?: number,
  offset?: number
) => {
  const res = await instance.get(`recipients/${id}/reactions/`, {
    params: { limit, offset }
  })
  return res.data
}

export const postRecipientsReactionsCreate = async (
  id: string,
  value: PostRecipientsReactionsCreate
) => {
  const res = await instance.post(`recipients/${id}/reactions/`, value)
  return res.data
}

export const postImageUrlCreate = async (formData: FormData) => {
  const res = await instance.post(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )
  return res.data
}
