import React from 'react'
import { Box } from '@ginlink/uilib'
import { Hello } from '@/components/Hello'
import { SentryTest, TestResponsive } from '@/components/Test'

export default function index() {
  return (
    <Box m={3}>
      <Hello />

      <SentryTest />

      <TestResponsive />
    </Box>
  )
}
