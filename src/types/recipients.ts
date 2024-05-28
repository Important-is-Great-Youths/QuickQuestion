export interface GetRecipientsList {
  id: number
  backgroundColor: 'beige' | 'purple' | 'blue' | 'green'
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

export interface RecentMessages {
  id: number
  recipientId: number
  sender: string
  profileImageURL: string
  relationship: string
  content: string
  font: string
  createdAt: string
}

export interface RecipientsDetailData {
  id: number
  name: string
  backgroundColor: 'beige' | 'purple' | 'blue' | 'green'
  backgroundImageURL: string
  createdAt: string
  messageCount: number
  recentMessages: RecentMessages[]
  reactionCount: number
  topReactions: any[]
}

export interface PostRecipientsMessagesCreateData {
  team?: string
  recipientId: string
  sender: string
  profileImageURL: string
  relationship?: string
  content: string
  font?: string
}
