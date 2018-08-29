// this is a library code, move the div container to APP if you want to combine the notification with avatar

import React from 'react'
import Radium from 'radium'
import Icons from '../Icons'
import PropTypes from 'prop-types'
import * as colors from '../../utils/colors'
import Color from 'color'

const Avatar = ({
  size,
  style,
  theme,
  image,
  borderColor,
  borderWidth,
  shadowOffset,
  shadowRadius,
  shadowOpacity,
  shadowColor,
  borderRadius,
  color
}) => {
  // Process user text input into a color object that handle diffrent conversions
  const _color = Color(shadowColor)

  const styles = {
    container: {
      base: {
        boxSizing: 'border-box'
      }
    },
    img: {
      base: {
        boxSizing: 'border-box',
        borderWidth: `${borderWidth}px`,
        boxShadow: `${shadowOffset.width}px ${shadowOffset.height}px ${shadowRadius}px rgba(${_color.red()}, ${_color.green()}, ${_color.blue()}, ${_color.alpha() * shadowOpacity})`,
        userSelect: 'none',
        width: `${size}px`
      },
      dark: {
        borderColor: borderColor ? `${borderColor}` : colors.keyColor
      }
    },
    placeholder: {
      base: {
        boxSizing: 'border-box',
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
        width: `${size}px`,
        borderRadius: `${borderRadius}px`,
        border: `${borderWidth}px solid`,
        boxShadow: `${shadowOffset.width}px ${shadowOffset.height}px ${shadowRadius}px rgba(${_color.red()}, ${_color.green()}, ${_color.blue()}, ${_color.alpha() * shadowOpacity})`
      },
      dark: {
        background: color ? `${color}` : colors.grey2,
        borderColor: borderColor ? `${borderColor}` : `${colors.black5}`
      }
    }
  }

  const { container, img, placeholder } = styles

  const styledContainer = [style, container.base]
  const styledImg = [img.base, ((theme === 'dark' && img.dark) || (theme === 'light' && img.light))]
  const styledPlaceholder = [placeholder.base, ((theme === 'dark' && placeholder.dark) || (theme === 'light' && placeholder.light))]

  return (
    <div style={styledContainer}>
      {
        image
          ? (
            <img
              style={styledImg}
              src={image}
              alt='splash-screen'
              draggable={false}
            />
          )
          : (
            <div style={styledPlaceholder}>
              <Icons
                style={{height: 35}}
                icon='person' size={size}
                color={theme === 'dark' && `${colors.white3}`} />
            </div>
          )
      }
    </div>
  )
}

Avatar.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object,
  theme: PropTypes.string,
  image: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  shadowOffset: PropTypes.object,
  shadowRadius: PropTypes.number,
  shadowOpacity: PropTypes.number,
  shadowColor: PropTypes.string,
  borderRadius: PropTypes.number,
  color: PropTypes.string
}

Avatar.defaultProps = {
  size: 36,
  theme: 'dark',
  shadowColor: 'rgb(0, 0, 0)',
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 1,
  shadowRadius: 0
}

export default Radium(Avatar)
