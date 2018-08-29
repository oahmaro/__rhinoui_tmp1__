import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { ThemeContext } from '../../utils/contextProviders'
import Color from 'color'

const Box = ({
  display,
  flex,
  justifyContent,
  alignItems,
  alignContent,
  wrap,
  width,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  borderWidth,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  style,
  color,
  position,
  top,
  right,
  bottom,
  left,
  borderRadius,
  children,
  shadowColor,
  shadowX,
  shadowY,
  shadowOpacity,
  shadowRadius,
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
  zIndex,
  id,
  flexDirection
}) => {
  const propMap = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
    stretch: 'stretch',
    baseline: 'baseline',
    grow: '1 1 auto',
    shrink: '0 1 auto',
    none: '0 0 auto'
  }

  const _color = Color(shadowColor)
  const styles = {
    base: {
      display: `${display}`,
      position: `${position}`,
      top: typeof top === 'boolean' ? top && 0 : `${top}`,
      right: typeof right === 'boolean' ? right && 0 : `${right}`,
      bottom: typeof bottom === 'boolean' ? bottom && 0 : `${bottom}`,
      left: typeof left === 'boolean' ? left && 0 : `${left}`,
      flex: `${propMap[flex]}`,
      flexDirection: `${flexDirection}`,
      flexWrap: `${wrap}`,
      justifyContent: `${propMap[justifyContent]}`,
      alignItems: `${propMap[alignItems]}`,
      alignContent: `${propMap[alignContent]}`,
      boxSizing: 'border-box',
      width: (typeof (width) === 'number' && `${width}px`) || ((typeof (width) === 'string' && `${width}`)),
      height: `${height}px`,
      maxHeight: `${maxHeight}px`,
      maxWidth: `${maxWidth}px`,
      minHeight: `${minHeight}px`,
      minWidth: `${minWidth}px`,
      background: `${color}`,
      overflowX: overflow === 'scrollX' && 'scroll',
      overflowY: overflow === 'scrollY' && 'scroll',
      overflow: `${overflow}`,
      borderRadius: `${borderRadius}`,
      paddingTop: (padding && `${padding}px`) || (paddingY && `${paddingY}px`) || (paddingTop && `${paddingTop}px`),
      paddingRight: (padding && `${padding}px`) || (paddingX && `${paddingX}px`) || (paddingRight && `${paddingRight}px`),
      paddingBottom: (padding && `${padding}px`) || (paddingY && `${paddingY}px`) || (paddingBottom && `${paddingBottom}px`),
      paddingLeft: (padding && `${padding}px`) || (paddingX && `${paddingX}px`) || (paddingLeft && `${paddingLeft}px`),
      marginTop: (margin && `${margin}px`) || (marginY && `${marginY}px`) || (marginTop && `${marginTop}px`),
      marginRight: (margin && `${margin}px`) || (marginX && `${marginX}px`) || (marginRight && `${marginRight}px`),
      marginBottom: (margin && `${margin}px`) || (marginY && `${marginY}px`) || (marginBottom && `${marginBottom}px`),
      marginLeft: (margin && `${margin}px`) || (marginX && `${marginX}px`) || (marginLeft && `${marginLeft}px`),
      zIndex: `${zIndex}`,
      boxShadow: `${shadowX}px ${shadowY}px ${shadowRadius}px rgba(${_color.red()}, ${_color.green()}, ${_color.blue()}, ${_color.alpha() * shadowOpacity})`
    }
  }

  return (
    <ThemeContext.Consumer>
      {
        (value) => {
          if (value) {
            const { colors, language } = value
            const theme = {
              background: colors.ui[color] ? `${colors.ui[color]}` : `${color}`,
              flexDirection: flexDirection === 'row' ? ((language.direction === 'ltr' && 'row') || (language.direction === 'rtl' && 'row-reverse')) : 'column',
              borderTop: borderWidth ? `${borderWidth}px solid ${colors.ui.fill2}` : `${borderTop}px solid ${colors.ui.fill2}`,
              borderRight: borderWidth ? `${borderWidth}px solid ${colors.ui.fill2}` : `${borderRight}px solid ${colors.ui.fill2}`,
              borderBottom: borderWidth ? `${borderWidth}px solid ${colors.ui.fill2}` : `${borderBottom}px solid ${colors.ui.fill2}`,
              borderLeft: borderWidth ? `${borderWidth}px solid ${colors.ui.fill2}` : `${borderLeft}px solid ${colors.ui.fill2}`
            }
            const styledBox = [styles.base, theme, style]
            return (
              <div id={id} style={styledBox}>
                { children }
              </div>
            )
          } else {
            const styledBox = [styles.base, style]
            return (
              <div id={id} style={styledBox}>
                { children }
              </div>
            )
          }
        }
      }
    </ThemeContext.Consumer>
  )
}

Box.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  maxHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  minHeight: PropTypes.number,
  minWidth: PropTypes.number,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['fill1', 'fill2', 'fill3', 'fill4', 'fill5', 'fill6', 'fill7', 'fill8', 'fill9']),
    PropTypes.string
  ]),
  style: PropTypes.object,
  children: PropTypes.node,
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  display: PropTypes.oneOf(['none', 'flex', 'inline-flex']),
  justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'arround', 'evenly']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'baseline']),
  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'between', 'around']),
  flex: PropTypes.oneOf(['grow', 'shrink', 'none']),
  position: PropTypes.oneOf(['static', 'relative', 'fixed', 'absolute']),
  top: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  right: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  bottom: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  left: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  overflow: PropTypes.oneOf(['visible', 'hidden', 'scroll', 'scrollX', 'scrollY', 'auto']),
  borderWidth: PropTypes.number,
  borderTop: PropTypes.number,
  borderRight: PropTypes.number,
  borderBottom: PropTypes.number,
  borderLeft: PropTypes.number,
  borderRadius: PropTypes.string,
  shadowColor: PropTypes.string,
  shadowX: PropTypes.number,
  shadowY: PropTypes.number,
  shadowOpacity: PropTypes.number,
  shadowRadius: PropTypes.number,
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
  zIndex: PropTypes.number,
  id: PropTypes.string,
  flexDirection: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse'])
}

Box.defaultProps = {
  height: 'auto',
  wrap: 'nowrap',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  flex: 'shrink',
  position: 'static',
  overflow: 'visible',
  shadowColor: 'black',
  shadowX: 0,
  shadowY: 0,
  shadowRadius: 0,
  shadowOpacity: 1,
  borderWidth: 0,
  zIndex: 1,
  flexDirection: 'row'
}

export default Radium(Box)
