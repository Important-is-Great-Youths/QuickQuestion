import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import ModalButton from '@/components/test/ModalButton'

const meta = {
  title: 'ModalButton',
  component: ModalButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ModalButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
