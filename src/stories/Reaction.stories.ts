import type { Meta, StoryObj } from '@storybook/react'
import Reaction from '@/components/common/Reaction/Reaction'

const meta = {
  title: 'Reaction',
  component: Reaction,
  tags: ['autodocs']
} satisfies Meta<typeof Reaction>

export default meta
type Story = StoryObj<typeof Reaction>

export const Default: Story = {
  args: {
    emoji: '😊'
  }
}
