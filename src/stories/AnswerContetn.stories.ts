import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import AnswerContent from '@/components/common/AnswerContent/AnswerContent'

const meta = {
  title: 'AnswerContent',
  component: AnswerContent,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof AnswerContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
