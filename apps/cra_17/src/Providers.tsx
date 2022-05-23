import { ThemeProvider } from 'styled-components'
import { dark, light } from '@ginlink/uilib'

function StyledThemeProvider({ children }: { children: any }) {
  return <ThemeProvider theme={false ? dark : light}>{children}</ThemeProvider>
}

export function Providers({ children }: { children: any }) {
  return <StyledThemeProvider>{children}</StyledThemeProvider>
}
