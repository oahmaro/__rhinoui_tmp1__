import React from 'react'
import PropTypes from 'prop-types'
import * as colors from '../utils/colors'
import Radium from 'radium'

function MenuBar(props) {
  const styles = {
    bar: {
      display: 'flex',
      position: 'relative',
      height: `${props.height}px`,
      background: `${props.color}`,
      borderBottom: `${props.borderWidth}px solid`,
      borderColor: `${props.borderColor}`,
      zIndex: 3
    },
    dark: {
      background: `${colors.grey1}`,
      borderColor: `${colors.black4}`
    },
    bottom: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      borderTop: `${props.borderWidth}px solid`,
      borderColor: `${props.borderColor}`
    }
  }

  const theme = (props.dark && styles.dark) || (props.light && styles.light)
  const bottom = props.bottom && styles.bottom
  return (
    <div style={[props.style, styles.bar, bottom, theme]}>
      {props.children}
    </div>
  )
}

MenuBar.propTypes = {
  children: PropTypes.element,
  height: PropTypes.number,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  style: PropTypes.object,
  bottom: PropTypes.bool
}

MenuBar.defaultProps = {
  height: 36,
  dark: true,
  borderWidth: 1
}

export default Radium(MenuBar)
