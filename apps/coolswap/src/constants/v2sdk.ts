import { V2SdkConfigProps } from '@uniswap/v2-sdk/dist/config'
import { SupportedChainId } from './chains'

export const v2SdkConfigs: {
  [chainId: number]: V2SdkConfigProps
} = {
  [SupportedChainId.KCC_TEST]: {
    factoryAddress: '0xF72Ad9009e81181E342153b20e8afe8aD21DA3e7',
    initCodeHash: '0x84a902c06264b6d04c9b7841473fa6e0634300f5331c41061f26ab4ce126de78',
  },
  [SupportedChainId.HUOBI_TEST]: {
    factoryAddress: '0x8b6A47e50CEF56c4e68b88C3aBaaEa86773710E7',
    initCodeHash: '0x15c4dfb595cfab7511d8e4f6d0a7fb1b28a953422e9d8079effd944a872973fe',
  },
  [SupportedChainId.BSC_TEST]: {
    factoryAddress: '0x4561ee54F45Ef938adbD778E451E111FEb249846',
    initCodeHash: '0xb3e277d5ddcc75858d4deb1a87f885fa5614a9346d154135c6ffc931138bdae4',
  },
}
