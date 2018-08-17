import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import classnames from 'classnames'

export default function SplashScreen(props) {
  const {
    title,
    img,
    link,
    size,
    style,
    borderRadius,
    light,
    dark,
    borderWidth,
    borderColor,
    titleColor,
    linkColor,
    onClick,
    titleFontSize,
    linkFontSize,
    fontFamily,
    center,
    titleMarginTop,
    titleMarginBottom,
    linkMarginTop,
    linkMarginBottom
  } = props

  const centerCheck = center
    ? {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'}
    : {}

  return (
    <div style={{...style, width: `${size}px`, ...centerCheck}}>
      {
        img
          ? (
            <img
              className={classnames({
                [`${styles.img}`]: true,
                [`${styles.center}`]: center
              })}
              style={{verticalAlign: 'center', borderRadius: `${borderRadius}px`, 'border': `${borderWidth}px solid ${borderColor}`}}
              width={size}
              height={size}
              src={img}
              alt='splash-screen'
              draggable={false}
            />
          )
          : (
            <div style={{...style,
              display: 'table',
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: '#2a2f33',
              borderRadius: `${borderRadius}px`,
              border: `${borderWidth}px solid ${borderColor}`,
              textAlign: 'center'
            }}>
              <p style={{
                display: 'table-cell',
                color: '#9e9d9e',
                userSelect: 'none',
                verticalAlign: 'middle'}}>No Image</p>
            </div>
          )
      }

      <p
        style={{
          color: `${titleColor}`,
          width: `${size}px`,
          fontSize: `${titleFontSize}px`,
          fontFamily: `${fontFamily} || 'roboto'`,
          marginTop: `${titleMarginTop}px`,
          marginBottom: `${titleMarginBottom}px`}}
        className={classnames({
          [`${styles.title}`]: true,
          [`${styles.dark}`]: dark,
          [`${styles.light}`]: light
        })}>{title}</p>

      <a
        onClick={onClick}
        style={{
          'color': `${linkColor}`,
          'width': `${size}px`,
          fontSize: `${linkFontSize}px`,
          fontFamily: `${fontFamily} || roboto`,
          marginTop: `${linkMarginTop}px`,
          marginBottom: `${linkMarginBottom}px`}}
        className={classnames({
          [`${styles.buttonText}`]: true,
          [`${styles.dark}`]: dark,
          [`${styles.light}`]: light
        })}>{link}</a>
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
  titleFontSize: 16,
  linkFontSize: 14,
  borderRadius: 12,
  dark: true
}
