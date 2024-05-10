import React, { createContext, ReactNode, useContext, useState } from 'react'

type ModalType = {
  id: string
  content: ReactNode
}

interface ModalContextValue {
  openModal: (content: ReactNode, id: string) => void
  closeModal: (id: string) => void
  closeAllModals: () => void
}

const ModalContext = createContext<ModalContextValue>({
  openModal: () => {},
  closeModal: () => {},
  closeAllModals: () => {}
})

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState<ModalType[]>([])

  const openModal = (content: ReactNode, id: string) => {
    const newModal = { id, content }
    setModals((prevModals) => [...prevModals, newModal])
  }

  const closeModal = (id: string) => {
    setModals(
      modals.filter((modal) => {
        return modal.id !== id
      })
    )
  }

  const closeAllModals = () => {
    setModals([])
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal, closeAllModals }}>
      {modals.map((modal) => (
        <div key={modal.id} id={modal.id}>
          {modal.content}
        </div>
      ))}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('반드시 ModalProvider 안에서 사용해야 합니다.')
  }

  return context
}

export default ModalProvider
