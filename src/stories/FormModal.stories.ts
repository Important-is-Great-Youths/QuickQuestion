import type { Meta, StoryObj } from '@storybook/react'
import FormModal from '@/components/common/FormModal/FormModal'

const meta = {
  title: 'FormModal',
  component: FormModal
} satisfies Meta<typeof FormModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: '1234',
    question: '이런 테스트 질문은 어때요?',
    onClose: () => alert('close')
  }
}
