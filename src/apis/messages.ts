import { instance } from '@/lib/axios'
import { PatchMessagesPartialUpdate, PutMessagesUpdate } from '@/types/messages'

export const getMessagesRead = async (id: number) => {
  const res = await instance.get(`messages/${id}/`)
  return res.data
}

export const putMessagesUpdate = async (
  id: number,
  value: PutMessagesUpdate
) => {
  const res = await instance.post(`messages/${id}/`, value)
  return res.data
}

export const patchMessagesPartialUpdate = async (
  id: string,
  value: PatchMessagesPartialUpdate
) => {
  const res = await instance.patch(`messages/${id}/`, value)
  return res.data
}

export const deleteMessagesDelete = async (id: string) => {
  const res = await instance.delete(`messages/${id}/`)
  return res.data
}
