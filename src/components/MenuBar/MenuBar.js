import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as colors from '../../utils/colors'
import Radium from 'radium'
import AppSelector from '../AppSelector'
import Color from 'color'

class MenuBar extends Component {
  state = {
    selectedApp: 'Contacts'
  }

  static propTypes = {
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
    shadowRadius: PropTypes.number,
    data: PropTypes.object
  }

  static defaultProps = {
    height: 36,
    borderWidth: 1,
    color: 'black',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 0
  }

  render() {
    const {
      shadowColor,
      shadowOffset,
      shadowRadius,
      height, bottom,
      borderWidth,
      borderColor,
      shadowOpacity,
      dark,
      light,
      style,
      color,
      data
    } = this.props

    const colorF = Color(shadowColor)

    const styles = {
      bar: {
        base: {
          display: 'flex',
          position: 'relative',
          height: `${height}px`,
          background: `${color}`,
          borderTop: bottom && `${borderWidth}px solid`,
          borderBottom: !bottom && `${borderWidth}px solid`,
          borderColor: `${borderColor}`,
          boxShadow: `${shadowOffset.width}px ${shadowOffset.height}px ${shadowRadius}px rgba(${colorF.red()}, ${colorF.green()}, ${colorF.blue()}, ${colorF.alpha() * shadowOpacity})`,
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
            borderTop: `${borderWidth}px solid`,
            borderColor: `${borderColor}`
          }
        }
      }
    }

    const barTheme = (dark && styles.bar.dark) || (light && styles.bar.light)
    const barBottom = bottom && styles.bar.state.bottom
    return (

      <div style={[style, styles.bar.base, barBottom, barTheme]}>
        <AppSelector selectedApp={this.state.selectedApp} menus={data} />
      </div>
    )
  }
}

export default Radium(MenuBar)
