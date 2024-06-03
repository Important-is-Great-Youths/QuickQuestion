import type { Meta, StoryObj } from '@storybook/react'
import ContentLayout from '@/components/questionDetail/ContentLayout/ContentLayout'

const meta = {
  title: 'Content Layout',
  component: ContentLayout,
  tags: ['autodocs']
} satisfies Meta<typeof ContentLayout>

export default meta
type Story = StoryObj<typeof ContentLayout>

export const Default: Story = {
  args: {
    text: '질문'
  }
}
