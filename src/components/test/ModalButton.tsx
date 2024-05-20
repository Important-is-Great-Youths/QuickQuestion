import Button from '../common/Button/Button'

const ModalButton = () => {
  return (
    <Button
      text="모달 버튼"
      size="lg"
      type="button"
      onClick={() => alert('click!')}
    />
  )
}

export default ModalButton
