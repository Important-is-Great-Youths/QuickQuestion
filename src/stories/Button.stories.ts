import type { Meta, StoryObj } from '@storybook/react'
import Button from '@/components/common/Button/Button'

const meta = {
  title: 'Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'full',
    text: '텍스트',
    type: 'button',
    variant: 'default'
  }
}

export const Another: Story = {
  args: {
    size: 'full',
    text: '텍스트',
    type: 'button',
    variant: 'another'
  }
}
