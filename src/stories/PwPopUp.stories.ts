import type { Meta, StoryObj } from '@storybook/react'
import PwPopUp from '@/components/common/PopUp/PwPopUp'

const meta = {
  title: 'PwPopUp',
  component: PwPopUp,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof PwPopUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    password: '1234',
    onCheck: () => alert('onCheck!')
  }
}
