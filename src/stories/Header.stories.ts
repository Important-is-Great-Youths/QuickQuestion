import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Header from '@/components/common/Header/Header'

const meta = {
  title: 'Header',
  component: Header,
  tags: ['autodocs']
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    page: 'main'
  }
}

export const Etc: Story = {
  args: {
    page: 'etc'
  }
}
