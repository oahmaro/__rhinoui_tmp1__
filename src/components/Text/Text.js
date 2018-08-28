import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { ThemeContext } from '../../utils/contextProviders'
import Color from 'color'

const Text = ({
  children,
  style,
  align,
  bold,
  italic,
  color,
  inline,
  shadowColor,
  shadowX,
  shadowY,
  shadowOpacity,
  shadowRadius,
  selectable,
  size,
  overflow
}) => {
  const propMap = {
    xs: '12',
    sm: '14',
    md: '16',
    lg: '18',
    xl: '22',
    break: 'break-word',
    normal: 'normal',
    ellipsis: 'ellipsis'
  }

  const _color = Color(shadowColor)
  const styles = {
    base: {
      display: inline ? 'inline' : 'block',
      fontFamily: 'Roboto, sans-serif',
      fontSize: (typeof size === 'string' && `${propMap[size]}px`) || (typeof size === 'number' && `${size}px`),
      overflow: 'hidden',
      textOverflow: overflow === 'ellipsis' ? 'ellipsis' : 'clip',
      wordWrap: `${propMap[overflow]}`,
      hyphens: 'auto',
      textAlign: `${align}`,
      fontWeight: (bold && 'bold') || 'normal',
      fontStyle: (italic && 'italic') || 'normal',
      color: `${color}`,
      width: inline ? 'auto' : '100%',
      userSelect: selectable ? 'auto' : 'none',
      textShadow: `${shadowX}px ${shadowY}px ${shadowRadius}px rgba(${_color.red()}, ${_color.green()}, ${_color.blue()}, ${_color.alpha() * shadowOpacity})`
    }
  }

  return (
    <ThemeContext.Consumer>
      {
        (value) => {
          const Tag = inline ? 'span' : 'div'
          if (value) {
            const { colors, language } = value
            const theme = {
              fontFamily: (language.locale === 'en' && 'Roboto, Noto Kufi Arabic, sans-serif') || (language.locale === 'ar' && 'Noto Kufi Arabic, Roboto, sans-serif'),
              color: colors.text[color] ? `${colors.text[color]}` : `${color}`
            }
            const styledText = [styles.base, theme, style]
            return (
              <Tag style={styledText}>
                { children }
              </Tag>
            )
          } else {
            const styledText = [styles.base, style]
            return (
              <Tag style={styledText}>
                { children }
              </Tag>
            )
          }
        }
      }
    </ThemeContext.Consumer>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary', 'disabled', 'other']),
    PropTypes.string
  ]),
  inline: PropTypes.bool,
  shadowColor: PropTypes.string,
  shadowX: PropTypes.number,
  shadowY: PropTypes.number,
  shadowOpacity: PropTypes.number,
  shadowRadius: PropTypes.number,
  selectable: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    PropTypes.number
  ]),
  overflow: PropTypes.oneOf(['normal', 'break', 'ellipsis'])
}

Text.defaultProps = {
  align: 'left',
  color: 'primary',
  shadowColor: 'black',
  shadowX: 0,
  shadowY: 0,
  shadowRadius: 0,
  shadowOpacity: 1,
  size: 'sm',
  overflow: 'normal'
}

export default Radium(Text)
