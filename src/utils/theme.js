import { path } from 'ramda'

const palette = {
  red: '#d53369',
  yellow: '#daae51',
  blue: '#22C1C3',
  gray: 'rgba(0,0,0,.1)',
}

const radius = {
  small: '3px',
  medium: '6px',
  large: '12px',
  xxl: '24px',
  circle: '100%',
}

const shadow = {
  small: '1px 1px  6px  rgba(213, 51, 105, .2)',
  medium: '1px 1px  6px  rgba(56,53,53,0.25)',
  large: '1px 1px  6px  rgba(56,53,53,0.30)',
}

const spacing = {
  small: '5px',
  medium: '10px',
  large: '20px',
}
const transitionAll = {
  slow: 'transition: all 0.5s ease-in-out;',
  normal: 'transition: all 0.3s ease-in-out;',
  speed: 'transition: all 0.1s ease-in-out;',
}

export const T = args => path(['theme', ...args.split('.')])

export default {
  palette,
  spacing,
  radius,
  shadow,
  transitionAll,
  gradient: {
    pm: `linear-gradient(90deg, ${palette.red} 0%, ${palette.yellow} 100%)`,
    sd: `linear-gradient(90deg, ${palette.blue} 0%, ${palette.yellow} 100%)`,
  },
}
