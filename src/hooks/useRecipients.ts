import { useMutation, useQuery } from '@tanstack/react-query'
import { UseFormReturn } from 'react-hook-form'

import {
  getRecipientsList,
  postRecipientsCreate,
  postImageUrlCreate
} from '@/apis/recipients'
import { PostRecipientsCreate } from '@/types/recipients'

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
