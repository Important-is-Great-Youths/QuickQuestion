import type { Meta, StoryObj } from "@storybook/react";
import Input from '@/components/common/Input/Input'

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'lg',
    type: 'text'
  }
}
