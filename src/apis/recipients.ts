import { instance } from '@/lib/axios'
import { PostRecipientsCreate } from '@/types/recipients'

export const getRecipientsList = async (limit?: number, offset?: number) => {
  const res = await instance.get('recipients/', { params: { limit, offset } })
  return res.data
}

export const postRecipientsCreate = async (value: PostRecipientsCreate) => {
  const res = await instance.post('recipients/', value)
  return res.data
}

export const getRecipientsRead = async (id: number) => {
  const res = await instance.get(`recipients/${id}`)
  return res.data
}

export const deleteRecipientsDelete = async (id: number) => {
  const res = await instance.get(`recipients/${id}`)
  return res.data
}

export const getRecipientsMessagesList = async (
  id: number,
  limit?: number,
  offset?: number
) => {
  const res = await instance.get(`recipients/${id}/messages/`, {
    params: { limit, offset }
  })
  return res.data
}

export const postRecipientsMessagesCreate = async (
  id: number,
  value: any /* 타입 변경해주세요 */
) => {
  const res = await instance.get(`recipients/${id}/messages/`, value)
  return res.data
}

export const getRecipientsReactionsList = async (
  id: number,
  limit?: number,
  offset?: number
) => {
  const res = await instance.get(`recipients/${id}/reactions/`, {
    params: { limit, offset }
  })
  return res.data
}

export const postRecipientsReactionsCreate = async (
  id: number,
  value: any /* 타입 변경해주세요 */
) => {
  const res = await instance.get(`recipients/${id}/reactions/`, value)
  return res.data
}