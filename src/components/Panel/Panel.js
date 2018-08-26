import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { ThemeContext } from '../../utils/contextProviders'

const Panel = ({
  height,
  style,
  color,
  children
}) => {
  const styles = {
    bar: {
      display: 'flex',
      boxSizing: 'border-box',
      height: `${height}px`,
      background: color ? `${color}` : 'black'
    }
  }

  return (
    <ThemeContext.Consumer>
      {
        (value) => {
          if (value) {
            const { colors, language } = value
            const theme = {
              background: color ? `${color}` : colors.ui.fill6,
              flexDirection: language.direction === 'ltr' ? 'row' : 'row-reverse'
            }
            const styledPanel = [styles.bar, theme, style]
            return (
              <div style={styledPanel}>
                { children }
              </div>
            )
          } else {
            const styledPanel = [styles.bar, style]
            return (
              <div style={styledPanel}>
                { children }
              </div>
            )
          }
        }
      }
    </ThemeContext.Consumer>
  )
}

Panel.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

Panel.defaultProps = {
  height: 36
}

export default Radium(Panel)
