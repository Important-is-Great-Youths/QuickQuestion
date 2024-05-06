import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import PopUp from '@/components/common/PopUp/PopUp'

const meta = {
  title: 'PopUp',
  component: PopUp,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof PopUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
