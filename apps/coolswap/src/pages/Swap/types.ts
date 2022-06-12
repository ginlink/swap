export enum CommonAddressType {
  CONTRACT,
  TOKEN,
}

export type CommonAddressInfo = {
  type: CommonAddressType
  chainId: number
  address: string
  label: React.ReactNode
  decimals: number
  symbol?: string
}
