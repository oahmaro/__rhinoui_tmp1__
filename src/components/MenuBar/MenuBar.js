import React from 'react'
import PropTypes from 'prop-types'
import * as colors from '../../utils/colors'
import Radium from 'radium'
import AppSelector from '../AppSelector'

function MenuBar(props) {
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
  bottom: PropTypes.bool
}

MenuBar.defaultProps = {
  height: 36,
  borderWidth: 1,
  color: 'black'
}

export default Radium(MenuBar)
