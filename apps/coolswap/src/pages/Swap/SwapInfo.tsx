import CopyHelper from '@/components/AccountDetails/Copy'
import { AutoColumn } from '@/components/Column'
import Row from '@/components/Row'
import useAddTokenToMetamask from '@/hooks/useAddTokenToMetamask'
import { ThemedText } from '@/theme'
import { Currency, Token } from '@uniswap/sdk-core'
import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { useCommonAddressInfo } from './data'
import { Icon } from '@iconify/react'
import { CommonAddressType } from './types'

const Wrapper = styled.div`
  text-align: left;
  padding: 1rem 1.25rem 0.5rem 1.25rem;
`

export function SwapInfo() {
  const [currencyToAdd, setCurrencyToAdd] = useState<Currency>()
  const commonAddressInfo = useCommonAddressInfo()

  const { addToken } = useAddTokenToMetamask(currencyToAdd)

  useEffect(() => {
    addToken && addToken()
  }, [addToken])

  return (
    <Wrapper>
      <AutoColumn gap={'4px'}>
        {commonAddressInfo.map(({ type, chainId, address, label, decimals, symbol }) => (
          <Row key={address}>
            <CopyHelper toCopy={address} iconPosition="left" iconSize={12} />
            {type === CommonAddressType.TOKEN && (
              <div style={{ marginRight: '4px', cursor: 'pointer' }}>
                <Icon
                  icon="logos:metamask-icon"
                  fontSize={12}
                  onClick={() => setCurrencyToAdd(new Token(chainId, address, decimals, symbol))}
                />
              </div>
            )}

            <ThemedText.Small>
              {label}: {address}
            </ThemedText.Small>
          </Row>
        ))}
      </AutoColumn>
    </Wrapper>
  )
}
