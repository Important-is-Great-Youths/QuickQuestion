import { useMutation, useQuery } from '@tanstack/react-query'

import { getRecipientsList, postRecipientsCreate } from '@/apis/recipients'
import { PostRecipientsCreate } from '@/types/recipients'

export const useGetRecipientsList = (
  limit?: number,
  offset?: number
) =>
  useQuery({
    queryKey: ['recipientsList'],
    queryFn: () => getRecipientsList(limit, offset)
  })

export const usePostRecipientsCreate = () =>
  useMutation({
    mutationFn: (value: PostRecipientsCreate) => postRecipientsCreate(value)
  })
