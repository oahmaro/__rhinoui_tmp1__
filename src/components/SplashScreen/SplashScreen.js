import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { ThemeContext } from '../../utils/contextProviders'
import Box from '../Box'
import Text from '../Text'

const SplashScreen = ({
  style,
  title,
  size,
  center,
  borderRadius,
  subTitle,
  titleSize,
  subTitleSize,
  titleMargin,
  subTitleMargin,
  translation
}) => {
  const styles = {
    container: {
      base: {

      },
      state: {
        center: {
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%'
        }
      }
    }
  }

  const centerStyles = center && styles.container.state.center
  return (
    <ThemeContext.Consumer>
      {
        (value) => {
          if (value) {
            const { colors } = value
            const styledContainer = [styles.container.base, style, centerStyles]
            return (
              <Box style={styledContainer} flexDirection='column' alignItems='center'>
                <Box
                  color={colors.ui.fill7}
                  width={size}
                  height={size}
                  borderRadius={`${borderRadius}px ${borderRadius}px ${borderRadius}px ${borderRadius}px`}>
                  <Text
                    color={colors.text.disabled}
                    align='center'
                    size='md'
                    lineHeight={size}
                    translation={translation ? translation.placeholder : ''}>
                    No Image
                  </Text>
                </Box>
                <Text
                  color={colors.text.secondary}
                  align='center'
                  marginTop={titleMargin}
                  size={titleSize}
                  translation={translation ? translation.title : ''}>
                  {title}
                </Text>
                <Text
                  color={colors.state.key}
                  align='center'
                  marginTop={subTitleMargin}
                  size={subTitleSize}
                  link
                  translation={translation ? translation.subTitle : ''}>
                  {subTitle}
                </Text>
              </Box>
            )
          } else {
            const styledContainer = [styles.container.base, style, centerStyles]
            return (
              <div style={styledContainer}>
                ''
              </div>
            )
          }
        }
      }
    </ThemeContext.Consumer>
  )
}

SplashScreen.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  size: PropTypes.number,
  center: PropTypes.bool,
  borderRadius: PropTypes.number,
  titleSize: PropTypes.PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    PropTypes.number
  ]),
  subTitleSize: PropTypes.PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    PropTypes.number
  ]),
  titleMargin: PropTypes.number,
  subTitleMargin: PropTypes.number,
  translation: PropTypes.object
}

SplashScreen.defaultProps = {
  size: 200,
  borderRadius: 12,
  titleSize: 'md',
  subTitleSize: 'xs',
  titleMargin: 10,
  subTitleMargin: 10
}

export default Radium(SplashScreen)
