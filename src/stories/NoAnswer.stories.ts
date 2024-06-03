import type { Meta, StoryObj } from '@storybook/react'
import NoAnswer from '@/components/common/NoAnswer/NoAnswer'

const meta = {
  title: 'NoAnswer',
  component: NoAnswer,
  tags: ['autodocs']
} satisfies Meta<typeof NoAnswer>

export default meta
type Story = StoryObj<typeof NoAnswer>

export const Default: Story = {
  args: {}
}
