import { useRouter } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { UseFormReturn } from 'react-hook-form'
import {
  getMessagesRead,
  putMessagesUpdate,
  patchMessagesPartialUpdate,
  deleteMessagesDelete
} from '@/apis/messages'
