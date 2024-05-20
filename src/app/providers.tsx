'use client'

import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ModalProvider from '@/contexts/ModalProvider'

const queryClient = new QueryClient()

export function Providers(props: any) {
  return (
    <ThemeProvider themes={['sunny', 'rainy', 'snowy']} defaultTheme="sunny">
      <ModalProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryStreamedHydration>
            {props.children}
            <ReactQueryDevtools initialIsOpen={false} />
          </ReactQueryStreamedHydration>
        </QueryClientProvider>
      </ModalProvider>
    </ThemeProvider>
  )
}
