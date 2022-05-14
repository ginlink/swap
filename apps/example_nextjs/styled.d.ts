import 'styled-components'
import { MyTheme } from '@ginlink/uilib'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends MyTheme {}
}
