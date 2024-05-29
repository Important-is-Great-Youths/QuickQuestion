export interface GetMessagesRead {
  id: number
  team: string
  recipientId: number
  sender: string
  profileImageURL: string
  relationship: '친구' | '지인' | '동료' | '가족'
  content: string
  font: 'Noto Sans' | 'Pretendard' | '나눔명조' | '나눔손글씨 손편지체'
  createdAt: string
}

export interface PutMessagesUpdate {
  team: string
  recipientId: number
  sender: string
  profileImageURL: string
  relationship: '친구' | '지인' | '동료' | '가족'
  content: string
  font: 'Noto Sans' | 'Pretendard' | '나눔명조' | '나눔손글씨 손편지체'
}

export interface PatchMessagesPartialUpdate {
  team: string
  recipientId: number
  sender: string
  profileImageURL: string
  relationship: '친구' | '지인' | '동료' | '가족'
  content: string
  font: 'Noto Sans' | 'Pretendard' | '나눔명조' | '나눔손글씨 손편지체'
}
