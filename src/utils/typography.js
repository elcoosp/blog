import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'
fairyGateTheme.overrideThemeStyles = () => ({
  a: {
    backgroundImage: 'none',
    textShadow: 'none',
    color: 'black',
  },
})
const typography = new Typography(fairyGateTheme)

export default typography
