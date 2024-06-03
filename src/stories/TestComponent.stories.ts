import TestComponent from '@/components/common/TestComponent/TestComponent'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'TestComponent',
  component: TestComponent,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof TestComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
