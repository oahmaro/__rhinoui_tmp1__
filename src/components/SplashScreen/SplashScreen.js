import React from 'react'
import PropTypes from 'prop-types'
import Raduim from 'radium'
import * as colors from '../utils/colors'
import * as sizes from '../utils/sizes'

function SplashScreen(props) {
  const styles = {
    container: {
      base: {
        width: `${props.size}`
      },
      dark: {

      },
      light: {

      },
      state: {
        center: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      }
    },
    img: {
      base: {
        borderColor: `${props.borderColor}`,
        borderWidth: `${props.borderWidth}px`,
        userSelect: 'none',
        width: `${props.size}px`
      },
      dark: {
        borderColor: colors.keyColor
      },
      light: {

      },
      state: {

      }
    },
    placeholder: {
      base: {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
        width: `${props.size}px`,
        height: `${props.size}px`,
        borderRadius: `${props.borderRadius}px`,
        border: `${props.borderWidth}px solid`
      },
      dark: {
        background: colors.grey2,
        borderColor: `${colors.black5}`
      },
      light: {

      },
      state: {

      }
    },
    placeholderText: {
      base: {
        userSelect: 'none',
        fontSize: `${sizes.s3}px`
      },
      dark: {
        color: colors.white3
      },
      light: {

      },
      state: {

      }
    },
    title: {
      base: {
        display: 'block',
        margin: 0,
        marginTop: `${props.titleMarginTop}px`,
        marginBottom: `${props.titleMarginBottom}px`,
        width: `${props.size}px`,
        color: colors.white2,
        fontColor: `${props.titleColor}`,
        textAlign: 'center',
        fontSize: `${props.titleFontSize}px`,
        fontFamily: `${props.fontFamily}`,
        userSelect: 'none'
      },
      dark: {
        color: colors.white3
      },
      light: {

      },
      state: {

      }
    },
    link: {
      base: {
        display: 'block',
        margin: 0,
        marginTop: `${props.linkMarginTop}px`,
        marginBottom: `${props.linkMarginBottom}px`,
        width: `${props.size}px`,
        color: `${props.linkColor}`,
        textAlign: 'center',
        fontSize: `${props.linkFontSize}px`,
        fontFamily: `${props.fontFamily}`,
        cursor: 'pointer',
        userSelect: 'none'
      },
      dark: {
        color: colors.keyColor
      },
      light: {

      },
      state: {

      }
    }
  }

  const { container, img, placeholder, placeholderText, title, link } = styles

  const containerTheme = (props.dark && container.dark) || (props.light && container.light)
  const imgTheme = (props.dark && img.dark) || (props.light && img.light)
  const placeholderTheme = (props.dark && placeholder.dark) || (props.light && placeholder.light)
  const placeholderTextTheme = (props.dark && placeholderText.dark) || (props.light && placeholderText.light)
  const titleTheme = (props.dark && title.dark) || (props.light && title.light)
  const linkTheme = (props.dark && link.dark) || (props.light && link.light)
  const containerCenter = props.center && container.state.center

  return (
    <div style={[props.style, container.base, containerCenter, containerTheme]}>
      {
        props.img
          ? (
            <img
              style={[img.base, imgTheme]}
              width={props.size}
              height={props.size}
              src={props.img}
              alt='splash-screen'
              draggable={false}
            />
          )
          : (
            <div style={[placeholder.base, placeholderTheme]}>
              <p style={[placeholderText.base, placeholderTextTheme]}>No Image</p>
            </div>
          )
      }

      <p style={[title.base, titleTheme]}>{props.title}</p>

      <a
        style={[link.base, linkTheme]}
        onClick={props.onClick}>{props.link}</a>
    </div>
  )
}

SplashScreen.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  borderRadius: PropTypes.number,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  titleColor: PropTypes.string,
  linkColor: PropTypes.string,
  onClick: PropTypes.func,
  titleFontSize: PropTypes.number,
  linkFontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  center: PropTypes.bool,
  titleMarginTop: PropTypes.number,
  titleMarginBottom: PropTypes.number,
  linkMarginTop: PropTypes.number,
  linkMarginBottom: PropTypes.number
}

SplashScreen.defaultProps = {
  title: 'Create your first record!',
  link: 'Create new link...',
  size: 200,
  titleFontSize: sizes.s3,
  linkFontSize: sizes.s2,
  borderRadius: 12,
  borderWidth: 1,
  fontFamily: 'roboto',
  titleMarginTop: 10,
  linkMarginTop: 10
}

export default Raduim(SplashScreen)
