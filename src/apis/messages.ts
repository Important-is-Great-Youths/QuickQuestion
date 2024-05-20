import { instance } from '@/lib/axios'

export const getMessagesRead = async (id: number) => {
  const res = await instance.get(`messages/${id}`)
  return res.data
}

export const putMessagesUpdate = async (
  id: number,
  value: any /* 타입 변경해주세요 */
) => {
  const res = await instance.post(`messages/${id}`, value)
  return res.data
}

export const patchMessagesPartialUpdate = async (
  id: number,
  value: any /* 타입 변경해주세요 */
) => {
  const res = await instance.post(`messages/${id}`, value)
  return res.data
}

export const deleteMessagesDelete = async (id: number) => {
  const res = await instance.get(`messages/${id}`)
  return res.data
}
