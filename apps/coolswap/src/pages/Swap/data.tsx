import { V2_FACTORY_ADDRESSES, V2_ROUTER_ADDRESS } from '@/constants/addresses'
import { SupportedChainId } from '@/constants/chains'
import { useAllTokens } from '@/hooks/Tokens'
import useActiveWeb3React from '@/hooks/useActiveWeb3React'
import { Trans } from '@lingui/macro'
import { useMemo } from 'react'
import { CommonAddressInfo, CommonAddressType } from './types'

const AddressData: {
  [chainId: number]: CommonAddressInfo[]
} = {
  [SupportedChainId.KCC_TEST]: [
    {
      type: CommonAddressType.CONTRACT,
      chainId: SupportedChainId.KCC_TEST,
      address: V2_ROUTER_ADDRESS[SupportedChainId.KCC_TEST],
      label: <Trans>RouterV2</Trans>,
      decimals: 18,
    },
    {
      type: CommonAddressType.CONTRACT,
      chainId: SupportedChainId.KCC_TEST,
      address: V2_FACTORY_ADDRESSES[SupportedChainId.KCC_TEST],
      label: <Trans>FactoryV2</Trans>,
      decimals: 18,
    },
  ],
  [SupportedChainId.BSC_TEST]: [
    {
      type: CommonAddressType.CONTRACT,
      chainId: SupportedChainId.BSC_TEST,
      address: V2_ROUTER_ADDRESS[SupportedChainId.BSC_TEST],
      label: <Trans>RouterV2</Trans>,
      decimals: 18,
    },
    {
      type: CommonAddressType.CONTRACT,
      chainId: SupportedChainId.BSC_TEST,
      address: V2_FACTORY_ADDRESSES[SupportedChainId.BSC_TEST],
      label: <Trans>FactoryV2</Trans>,
      decimals: 18,
    },
  ],
  [SupportedChainId.HUOBI_TEST]: [
    {
      type: CommonAddressType.CONTRACT,
      chainId: SupportedChainId.HUOBI_TEST,
      address: V2_ROUTER_ADDRESS[SupportedChainId.HUOBI_TEST],
      label: <Trans>RouterV2</Trans>,
      decimals: 18,
    },
    {
      type: CommonAddressType.CONTRACT,
      chainId: SupportedChainId.HUOBI_TEST,
      address: V2_FACTORY_ADDRESSES[SupportedChainId.HUOBI_TEST],
      label: <Trans>FactoryV2</Trans>,
      decimals: 18,
    },
  ],
}

export function useCommonAddressInfo(): CommonAddressInfo[] {
  const { chainId } = useActiveWeb3React()
  const addressData = chainId ? AddressData[chainId] ?? [] : []

  const allTokens = useAllTokens()

  const tokenData = useMemo(
    () =>
      Object.values(allTokens).map<CommonAddressInfo>(({ chainId, address, symbol, decimals }) => ({
        type: CommonAddressType.TOKEN,
        chainId,
        address,
        label: symbol,
        symbol,
        decimals: decimals,
      })),
    [allTokens]
  )

  return [...addressData, ...tokenData]
}
