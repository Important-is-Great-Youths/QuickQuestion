import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  getMessagesRead,
  putMessagesUpdate,
  patchMessagesPartialUpdate,
  deleteMessagesDelete
} from '@/apis/messages'
import { PatchMessagesPartialUpdate, PutMessagesUpdate } from '@/types/messages'

export const useGetMessagesRead = (id: number) =>
  useQuery({
    queryKey: ['messagesRead'],
    queryFn: () => getMessagesRead(id)
  })

export const usePutMessagesUpdate = (id: number) =>
  useMutation({
    mutationFn: (value: PutMessagesUpdate) => putMessagesUpdate(id, value)
  })

export const usePatchMessagesPartialUpdate = (id: string) =>
  useMutation({
    mutationFn: (value: PatchMessagesPartialUpdate) =>
      patchMessagesPartialUpdate(id, value)
  })

export const useDeleteMessagesDelete = (id: string) =>
  useMutation({
    mutationFn: () => deleteMessagesDelete(id)
  })
