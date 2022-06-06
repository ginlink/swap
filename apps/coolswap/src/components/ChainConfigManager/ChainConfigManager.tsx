import { v2SdkConfigs } from '@/constants/v2sdk'
import useActiveWeb3React from '@/hooks/useActiveWeb3React'
import { v2SdkConfig } from '@uniswap/v2-sdk'
import { useEffect } from 'react'

// default config
v2SdkConfig.updateConfig(v2SdkConfigs[322])

export default function ChainConfigManager({ children }: { children: JSX.Element }) {
  const { chainId } = useActiveWeb3React()

  // update sdk config
  useEffect(() => {
    const config = chainId ? v2SdkConfigs[chainId] : undefined

    if (!config) return

    v2SdkConfig.updateConfig(config)
  }, [chainId])

  return children
}
