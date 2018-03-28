import styled, { keyframes } from 'styled-components'

const radiusChange = ({ theme: { radius: { small, circle } } }) => keyframes`
0% {
    border-radius: ${small};
}

100% {
    border-radius: ${circle};
}
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`

export { rotate, radiusChange }
