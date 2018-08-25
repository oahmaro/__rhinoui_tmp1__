import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as colors from '../../utils/colors'
import Radium from 'radium'
import Color from 'color'

class InfoBar extends Component {
  static propTypes = {
    height: PropTypes.number,
    color: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    theme: PropTypes.string,
    style: PropTypes.object,
    shadowColor: PropTypes.string,
    shadowOffset: PropTypes.object,
    shadowOpacity: PropTypes.number,
    shadowRadius: PropTypes.number,
    position: PropTypes.string
  }

  static defaultProps = {
    height: 32,
    borderWidth: 1,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 0,
    position: 'bottom',
    theme: 'dark'
  }

  render() {
    const {
      color,
      shadowColor,
      shadowOffset,
      shadowRadius,
      height,
      position,
      borderWidth,
      borderColor,
      shadowOpacity,
      theme,
      style
    } = this.props

    const colorF = Color(shadowColor)

    const styles = {
      bar: {
        base: {
          display: 'flex',
          position: 'relative',
          height: `${height}px`,
          boxSizing: 'border-box',
          boxShadow: `${shadowOffset.width}px ${shadowOffset.height}px ${shadowRadius}px rgba(${colorF.red()}, ${colorF.green()}, ${colorF.blue()}, ${colorF.alpha() * shadowOpacity})`,
          zIndex: 3
        },
        dark: {
          background: color ? `${color}` : `${colors.black2}`,
          borderColor: borderColor ? `${borderColor}` : `${colors.black4}`
        },
        state: {
          top: {
            borderbottom: `${borderWidth}px solid`,
            borderColor: `${borderColor}`,
            position: 'absolute',
            top: 0,
            width: '100%'
          },
          bottom: {
            borderTop: `${borderWidth}px solid`,
            borderColor: `${borderColor}`,
            position: 'absolute',
            bottom: 0,
            width: '100%'
          }
        }
      }
    }

    const { bar } = styles
    const styledBar = [style, bar.base, ((position === 'bottom' && bar.state.bottom) || (position === 'top' && bar.state.top)), ((theme === 'dark' && bar.dark) || (theme === 'light' && bar.light))]

    return (
      <div style={styledBar}><p /></div>
    )
  }
}

export default Radium(InfoBar)
