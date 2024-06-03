import { ReactNode, useEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './ModalWrapper.module.scss'

const cx = classNames.bind(styles)

interface Props {
  id: string
  children: ReactNode
  onRemove: (id: string) => void
}

function ModalWrapper({ children, id, onRemove }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const handleKeydownEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onRemove(id)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && e.target instanceof Node && ref.current === e.target) {
        onRemove(id)
      }
    }

    const showModal = () => {
      if (ref.current && !ref.current.open) {
        // Check if dialog is not already open
        ref.current.showModal()
        document.addEventListener('keydown', handleKeydownEsc)
        document.addEventListener('click', handleClickOutside)
        document.body.style.overflow = 'hidden'
        ref.current.focus()
      }
    }

    showModal()

    return () => {
      document.removeEventListener('keydown', handleKeydownEsc)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'auto'
      if (ref.current) {
        ref.current.close()
      }
    }
  }, [id, onRemove])

  return (
    <dialog open={false} ref={ref} className={cx('modalwrapper')}>
      {children}
    </dialog>
  )
}

export default ModalWrapper
