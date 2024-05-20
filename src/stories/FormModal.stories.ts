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
    size: 'full',
    text: '텍스트',
    type: 'button',
    variant: 'another'
  }
}
