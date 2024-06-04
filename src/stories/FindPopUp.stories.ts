import type { Meta, StoryObj } from '@storybook/react'
import FindPopUp from '@/components/common/PopUp/FindPopUp'

const meta = {
  title: 'FindPopUp',
  component: FindPopUp,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FindPopUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
