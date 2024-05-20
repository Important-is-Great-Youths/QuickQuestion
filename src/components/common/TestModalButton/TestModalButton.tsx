import { useModal } from '@/contexts/ModalProvider'
import TestModal from '../TestModal/TestModal'

const TestModalButton = () => {
  const modalId = crypto.randomUUID()
  const { openModal, closeModal } = useModal()

  const handleTestModal = () => {
    openModal(<TestModal />, modalId)
  }

  return (
    <div>
      <button onClick={handleTestModal}>openmodal</button>
    </div>
  )
}

export default TestModalButton
