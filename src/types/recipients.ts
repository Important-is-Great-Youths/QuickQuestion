export interface GetRecipientsList {
  id: number
  backgroundColor: string
  backgroundImageURL: string | null
  createdAt: string
  messageCount: number
  name: string
  reactionCount: number
  recentMessages: string[]
  topReactions: string[]
}

export interface PostRecipientsCreate {
  team: string
  name?: string
  backgroundColor?: string
  backgroundImageURL?: string | undefined
}

export interface PostRecipientsReactionsCreate {
  emoji: string
  type: 'increase' | 'decrease'
  team?: string
  id?: string
}

export interface PostRecipientsMessagesCreate {
  team: string
  recipientId: string
  sender: string
  profileImageURL: string
  relationship: string
  content: string
  font: string
}
