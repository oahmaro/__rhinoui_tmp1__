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
  overflow,
  lineHeight,
  link,
  href,
  onClick,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  translation
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
      boxSizing: 'border-box',
      lineHeight: `${lineHeight}px`,
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
      textDecoration: 'none',
      paddingTop: (padding && `${padding}px`) || (paddingY && `${paddingY}px`) || (paddingTop && `${paddingTop}px`),
      paddingRight: (padding && `${padding}px`) || (paddingX && `${paddingX}px`) || (paddingRight && `${paddingRight}px`),
      paddingBottom: (padding && `${padding}px`) || (paddingY && `${paddingY}px`) || (paddingBottom && `${paddingBottom}px`),
      paddingLeft: (padding && `${padding}px`) || (paddingX && `${paddingX}px`) || (paddingLeft && `${paddingLeft}px`),
      marginTop: (margin && `${margin}px`) || (marginY && `${marginY}px`) || (marginTop && `${marginTop}px`),
      marginRight: (margin && `${margin}px`) || (marginX && `${marginX}px`) || (marginRight && `${marginRight}px`),
      marginBottom: (margin && `${margin}px`) || (marginY && `${marginY}px`) || (marginBottom && `${marginBottom}px`),
      marginLeft: (margin && `${margin}px`) || (marginX && `${marginX}px`) || (marginLeft && `${marginLeft}px`),
      textShadow: (shadowX || shadowY) ? `${shadowX}px ${shadowY}px ${shadowRadius}px rgba(${_color.red()}, ${_color.green()}, ${_color.blue()}, ${_color.alpha() * shadowOpacity})` : ''
    }
  }

  return (
    <ThemeContext.Consumer>
      {
        (value) => {
          const Tag = inline ? 'span' : 'div'
          if (value) {
            const { colors, language, sizes } = value
            const theme = {
              fontFamily: language.fonts,
              color: colors.text[color] ? `${colors.text[color]}` : `${color}`,
              direction: language.direction,
              fontSize: (typeof size === 'string' && `${sizes[size]}`) || (typeof size === 'number' && `${size}px`)
            }
            const styledText = [styles.base, theme, style]
            if (!link) {
              return (
                <Tag style={styledText}>
                  { (language.locale === 'en' && children) || (language.locale === 'ar' && translation) }
                </Tag>
              )
            } else {
              const stateColor = Color(colors.text[color] ? `${colors.text[color]}` : `${color}`)
              const link = {
                cursor: 'pointer',
                ':hover': {
                  color: stateColor.lighten(0.35).rgb().string()
                },
                ':active': {
                  color: stateColor.darken(0.25).rgb().string()
                }
              }
              return (
                <a onClick={onClick} style={[...styledText, link]} href={href}>
                  { (language.locale === 'en' && children) || (language.locale === 'ar' && translation) }
                </a>
              )
            }
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
  overflow: PropTypes.oneOf(['normal', 'break', 'ellipsis']),
  lineHeight: PropTypes.number,
  link: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  padding: PropTypes.number,
  paddingX: PropTypes.number,
  paddingY: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  margin: PropTypes.number,
  marginX: PropTypes.number,
  marginY: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  translation: PropTypes.string
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
