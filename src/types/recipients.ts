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
