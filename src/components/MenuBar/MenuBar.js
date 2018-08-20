import React from 'react'
import PropTypes from 'prop-types'
import * as colors from '../../utils/colors'
import Radium from 'radium'
import AppSelector from '../AppSelector'
import Color from 'color'

function MenuBar(props) {
  const color = Color(props.shadowColor)
  console.log(color)
  const styles = {
    bar: {
      base: {
        display: 'flex',
        position: 'relative',
        height: `${props.height}px`,
        background: `${props.color}`,
        borderTop: props.bottom && `${props.borderWidth}px solid`,
        borderBottom: !props.bottom && `${props.borderWidth}px solid`,
        borderColor: `${props.borderColor}`,
        boxShadow: `${props.shadowOffset.width}px ${props.shadowOffset.height}px ${props.shadowRadius}px rgba(${color.red()}, ${color.green()}, ${color.blue()}, ${color.alpha() * props.shadowOpacity})`,
        zIndex: 3
      },
      dark: {
        background: `${colors.grey1}`,
        borderColor: `${colors.black4}`
      },
      light: {

      },
      state: {
        bottom: {
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTop: `${props.borderWidth}px solid`,
          borderColor: `${props.borderColor}`
        }
      }
    }
  }

  const barTheme = (props.dark && styles.bar.dark) || (props.light && styles.bar.light)
  const barBottom = props.bottom && styles.bar.state.bottom

  return (
    <div style={[props.style, styles.bar.base, barBottom, barTheme]}>
      <AppSelector />
    </div>
  )
}

MenuBar.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  style: PropTypes.object,
  bottom: PropTypes.bool,
  shadowColor: PropTypes.string,
  shadowOffset: PropTypes.object,
  shadowOpacity: PropTypes.number,
  shadowRadius: PropTypes.number
}

MenuBar.defaultProps = {
  height: 36,
  borderWidth: 1,
  color: 'black',
  shadowColor: 'rgb(0, 0, 0)',
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 1,
  shadowRadius: 0
}

export default Radium(MenuBar)
