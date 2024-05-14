import { useMutation, useQuery } from '@tanstack/react-query'

import {
  getRecipientsList,
  postRecipientsCreate,
  postImageUrlCreate,
  getRecipientsReactionsList,
  postRecipientsReactionsCreate
} from '@/apis/recipients'
import {
  PostRecipientsCreate,
  PostRecipientsReactionsCreate
} from '@/types/recipients'

export const useGetRecipientsList = (limit?: number, offset?: number) =>
  useQuery({
    queryKey: ['recipientsList'],
    queryFn: () => getRecipientsList(limit, offset)
  })

export const usePostRecipientsCreate = () =>
  useMutation({
    mutationFn: (value: PostRecipientsCreate) => postRecipientsCreate(value)
  })

export const usePostImageUrlCreate = () =>
  useMutation({
    mutationFn: (formData: FormData) => postImageUrlCreate(formData)
  })

export const useGetReaction = (id: string, limit?: number, offset?: number) =>
  useQuery({
    queryKey: ['reaction'],
    queryFn: () => getRecipientsReactionsList(id, limit, offset)
  })

export const usePostReaction = (id: string) =>
  useMutation({
    mutationFn: (value: PostRecipientsReactionsCreate) =>
      postRecipientsReactionsCreate(id, value)
  })
