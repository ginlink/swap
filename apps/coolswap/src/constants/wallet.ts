import { AbstractConnector } from '@web3-react/abstract-connector'

import INJECTED_ICON_URL from '../assets/images/arrow-right.svg'
import METAMASK_ICON_URL from '../assets/images/metamask.png'
import { injected } from '../connectors'
import { BASE_SCAN_URLS, SupportedChainId } from './chains'
import { ExternalProvider } from '@ethersproject/providers'
import { nodes } from '@/utils/getRpcUrl'
import { CHAIN_INFO } from './chainInfo'

interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconURL: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconURL: INJECTED_ICON_URL,
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconURL: METAMASK_ICON_URL,
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  },
}

const NETWORK_CONFIG = {
  [SupportedChainId.KCC_TEST]: {
    name: 'Kcc Testnet',
    scanURL: BASE_SCAN_URLS[SupportedChainId.KCC_TEST],
  },
}

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async (externalProvider?: ExternalProvider) => {
  const provider = externalProvider || window.ethereum
  const chainIdEnv = process.env.REACT_APP_CHAIN_ID
  if (!chainIdEnv) throw new Error('Invalid chainId')

  const chainId = parseInt(chainIdEnv, 10) as keyof typeof NETWORK_CONFIG
  const providerRequest = provider?.request

  if (!providerRequest) throw new Error('Invalid providerRequest')

  const chainInfo = CHAIN_INFO[chainId]

  if (!NETWORK_CONFIG[chainId]) {
    console.error('Invalid chain id')
    return false
  }
  if (provider) {
    try {
      await providerRequest({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      })
      return true
    } catch (switchError) {
      if ((switchError as any)?.code === 4902) {
        try {
          await providerRequest({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: `0x${chainId.toString(16)}`,
                chainName: chainInfo.label,
                nativeCurrency: {
                  name: chainInfo.nativeCurrency.name,
                  symbol: chainInfo.nativeCurrency.symbol,
                  decimals: chainInfo.nativeCurrency.decimals,
                },
                rpcUrls: nodes,
                blockExplorerUrls: [`${chainInfo.explorer}/`],
              },
            ],
          })
          return true
        } catch (error) {
          console.error('Failed to setup the network in Metamask:', error)
          return false
        }
      }
      return false
    }
  } else {
    console.error("Can't setup the network on metamask because window.ethereum is undefined")
    return false
  }
}
