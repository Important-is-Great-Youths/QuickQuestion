const registDragEvent = ({
  onDragChange,
  onDragEnd,
  stopPropagation
}: {
  onDragChange?: (deltaX: number, deltaY: number) => void
  onDragEnd?: (deltaX: number, deltaY: number) => void
  stopPropagation?: boolean
}) => {
  return {
    onMouseDown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      if (stopPropagation) clickEvent.stopPropagation()

      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX
        const deltaY = moveEvent.pageY - clickEvent.pageY
        onDragChange?.(deltaX, deltaY)
      }

      const mouseUpHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX
        const deltaY = moveEvent.pageY - clickEvent.pageY
        onDragEnd?.(deltaX, deltaY)
        document.removeEventListener('mousemove', mouseMoveHandler)
      }

      document.addEventListener('mousemove', mouseMoveHandler)
      document.addEventListener('mouseup', mouseUpHandler, { once: true })
    }
  }
}

export default registDragEvent
