import { css } from 'styled-components'
import { rotate, radiusChange } from '../utils/keyframes'
import { T } from '../utils/theme'

const circleSquareRotating = css`
  ::after {
    content: '';
    background-image: ${T('gradient.sd')};
    border-radius: ${T('radius.small')};
    box-shadow: ${T('shadow.large')};
    position: absolute;
    top: 80px;
    display: block;
    width: 40px;
    height: 40px;
    animation: ${radiusChange} 10s ease-in-out infinite alternate,
      ${rotate} 90s infinite;
  }
`
export default circleSquareRotating
