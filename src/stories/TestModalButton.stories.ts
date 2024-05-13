import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import TestModalButton from '@/components/common/TestModalButton/TestModalButton'

const meta = {
  title: 'TestModalButton',
  component: TestModalButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof TestModalButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
