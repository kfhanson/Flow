import type { Store } from '../types/commerce'

export const mockStores: Store[] = [
  {
    storeId: 'flow-senayan',
    name: 'Flow Senayan',
    address: 'Plaza Senayan, Jl. Asia Afrika No. 8',
    city: 'Jakarta',
    postalCode: '10270',
    country: 'Indonesia',
    longitude: 106.8028,
    latitude: -6.2251,
    pickupAvailable: true,
  },
  {
    storeId: 'flow-kemang',
    name: 'Flow Kemang',
    address: 'Jl. Kemang Raya No. 11',
    city: 'Jakarta',
    postalCode: '12730',
    country: 'Indonesia',
    longitude: 106.8131,
    latitude: -6.2615,
    pickupAvailable: true,
  },
  {
    storeId: 'flow-pik',
    name: 'Flow PIK',
    address: 'Pantai Indah Kapuk Avenue, Jl. Pantai Indah Utara',
    city: 'Jakarta',
    postalCode: '14460',
    country: 'Indonesia',
    longitude: 106.7419,
    latitude: -6.1133,
    pickupAvailable: true,
  },
]
