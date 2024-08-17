import { css } from '@emotion/react'
import tw, { theme } from 'twin.macro'

const globalStyles = css`
  body {
    ${tw`bg-darkBg text-white min-h-screen`}
  }
`

export default globalStyles