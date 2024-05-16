import { useMutation, useQuery } from '@tanstack/react-query'
import { UseFormReturn } from 'react-hook-form'

import {
  getRecipientsList,
  postRecipientsCreate,
  postImageUrlCreate,
  getRecipientsReactionsList,
  postRecipientsReactionsCreate,
  postRecipientsMessagesCreate
} from '@/apis/recipients'
import {
  PostRecipientsCreate,
  PostRecipientsReactionsCreate,
  PostRecipientsMessagesCreate
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

export const usePostImageUrlCreate = (setValue: UseFormReturn['setValue']) =>
  useMutation({
    mutationFn: (formData: FormData) => postImageUrlCreate(formData),
    onSuccess(data) {
      setValue('backgroundImageURL', data.data.url)
    }
  })

export const usePostRecipientsMessagesCreate = (id: string) => {
  useMutation({
    mutationFn: (value: PostRecipientsMessagesCreate) =>
      postRecipientsMessagesCreate(id, value)
  })
}
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
