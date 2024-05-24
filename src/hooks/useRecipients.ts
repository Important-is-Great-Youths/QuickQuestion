import { useRouter } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { UseFormReturn } from 'react-hook-form'

import {
  getRecipientsList,
  postRecipientsCreate,
  postImageUrlCreate,
  getRecipientsReactionsList,
  postRecipientsReactionsCreate,
  getRecipientsRead,
  postRecipientsMessagesCreate
} from '@/apis/recipients'
import {
  PostRecipientsCreate,
  PostRecipientsReactionsCreate,
  PostRecipientsMessagesCreateData
} from '@/types/recipients'

export const useGetRecipientsList = (limit?: number, offset?: number) =>
  useQuery({
    queryKey: ['recipientsList'],
    queryFn: () => getRecipientsList(limit, offset)
  })

export const usePostRecipientsCreate = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: (value: PostRecipientsCreate) => postRecipientsCreate(value),
    onSuccess(data) {
      router.push(`/questiondetail/${data.id}`)
    }
  })
}

export const useGetRecipientsRead = (id: string) =>
  useQuery({
    queryKey: ['recipientsRead', id],
    queryFn: () => getRecipientsRead(id)
  })

export const usePostImageUrlCreate = (setValue: UseFormReturn['setValue']) =>
  useMutation({
    mutationFn: (formData: FormData) => postImageUrlCreate(formData),
    onSuccess(data) {
      setValue('backgroundImageURL', data.data.url)
    }
  })

export const usePostProfileImageUrlCreate = (
  setValue: UseFormReturn['setValue']
) =>
  useMutation({
    mutationFn: (formData: FormData) => postImageUrlCreate(formData),
    onSuccess(data) {
      setValue('profileImageURL', data.data.url)
    }
  })

export const usePostRecipientsMessagesCreate = (id: string) => {
  const router = useRouter()
  return useMutation({
    mutationFn: (formData: PostRecipientsMessagesCreateData) =>
      postRecipientsMessagesCreate(id, formData),
    onSuccess(data) {
      router.push(`/questiondetail/${data.recipientId}`)
    }
  })
}

export const useGetReaction = (id: string, limit?: number, offset?: number) =>
  useQuery({
    queryKey: ['reaction', id],
    queryFn: () => getRecipientsReactionsList(id, limit, offset)
  })

export const usePostReaction = (id: string) =>
  useMutation({
    mutationFn: (value: PostRecipientsReactionsCreate) =>
      postRecipientsReactionsCreate(id, value)
  })
