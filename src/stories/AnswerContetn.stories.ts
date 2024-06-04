import type { Meta, StoryObj } from '@storybook/react'
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
  args: {
    answerId: '1',
    questionId: '2',
    profileImage:
      'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sender: '타키타',
    date: new Date().toISOString(),
    answer: `병아리들은 애기때는 깃털이 아닌 솜털이에요! 부화한지 일주일정도 지나게 되면 노란 솜털이 빠지고하얀 깃털, 갈색 깃털 등 다양한 색의 깃털이 나오게 되는거죵. 쉽게말해 깃털 색이 노란색에서 하얀색으로 변화하는게 아닌 그냥 솜털 자체가 빠지면서 다른색깔인 새 깃털로 바뀐다는겁니다!`,
    checkId: 'hi',
    userType: 'answer'
  }
}

export const Question: Story = {
  args: {
    answerId: '1',
    questionId: '2',
    profileImage:
      'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sender: '타키타',
    date: new Date().toISOString(),
    answer: `병아리들은 애기때는 깃털이 아닌 솜털이에요! 부화한지 일주일정도 지나게 되면 노란 솜털이 빠지고하얀 깃털, 갈색 깃털 등 다양한 색의 깃털이 나오게 되는거죵. 쉽게말해 깃털 색이 노란색에서 하얀색으로 변화하는게 아닌 그냥 솜털 자체가 빠지면서 다른색깔인 새 깃털로 바뀐다는겁니다!`,
    checkId: 'hi',
    userType: 'question'
  }
}
