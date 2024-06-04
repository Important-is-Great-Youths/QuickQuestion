import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import AlertModal from '@/components/common/AlertModal/AlertModal'

const meta = {
  title: 'AlertModal',
  component: AlertModal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof AlertModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { onCancel: () => alert('onCancel'), onDelete: () => alert('onDelete') }
}
