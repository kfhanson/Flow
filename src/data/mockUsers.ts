import type { MockUser } from '../types/commerce'

export const mockUsers: MockUser[] = [
  {
    userId: 'raka-demo',
    firstName: 'Raka',
    city: 'Jakarta',
    latitude: -6.2088,
    longitude: 106.8456,
  },
]

export const defaultMockUserId = mockUsers[0].userId
