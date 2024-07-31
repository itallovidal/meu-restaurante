import 'styled-components'
import { mainTheme } from './theme.ts'

type MyTheme = typeof mainTheme

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}
