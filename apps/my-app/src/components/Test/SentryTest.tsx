import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

export default function SentryTest() {
  return (
    <Wrapper
      onClick={() => {
        throw new Error('SentryTest error')
      }}
    >
      SentryTest
    </Wrapper>
  )
}
