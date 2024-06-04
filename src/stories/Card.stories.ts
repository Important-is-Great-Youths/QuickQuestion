import type { Meta, StoryObj } from '@storybook/react'
import Card from '@/components/common/Card/Card'

const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs']
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    cardTitle: 'beige',
    cardText: '테스트',
    answerCount: 0
  }
}
