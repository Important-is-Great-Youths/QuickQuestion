import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import TestModal from '@/components/common/TestModal/TestModal'

const meta = {
  title: 'TestModal',
  component: TestModal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof TestModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
