import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import classnames from 'classnames'

class SplashScreen extends Component {
  static propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.object,
    borderRadius: PropTypes.number,
    theme: PropTypes.string,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    titleColor: PropTypes.string,
    linkColor: PropTypes.string,
    onClick: PropTypes.func,
    titleFontSize: PropTypes.string,
    linkFontSize: PropTypes.string,
    fontFamily: PropTypes.string,
    center: PropTypes.bool
  }

  render() {
    const {
      title,
      img,
      link,
      size,
      style,
      borderRadius,
      theme,
      borderWidth,
      borderColor,
      titleColor,
      linkColor,
      onClick,
      titleFontSize,
      linkFontSize,
      fontFamily,
      center
    } = this.props

    const centerCheck = center ? {position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'} : {margin: 0}
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
                <p style={{display: 'table-cell', color: '#9e9d9e', userSelect: 'none', verticalAlign: 'middle'}}>No Image</p>
              </div>
            )
        }

        <p style={{
          'color': `${titleColor}`,
          'width': `${size}px`,
          fontSize: `${titleFontSize}px`,
          fontFamily: `${fontFamily} || 'roboto'`}} className={classnames({
          [`${styles.title}`]: true,
          [`${styles.dark}`]: theme === undefined || 'dark',
          [`${styles.light}`]: theme === 'light'
        })}>{title}</p>

        <a
          onClick={onClick}
          style={{
            'color': `${linkColor}`,
            'width': `${size}px`,
            fontSize: `${linkFontSize}px`,
            fontFamily: `${fontFamily} || roboto`}}
          className={classnames({
            [`${styles.buttonText}`]: true,
            [`${styles.dark}`]: theme === undefined || 'dark',
            [`${styles.light}`]: theme === 'light'
          })}>{link}</a>
      </div>
    )
  }
}

export default SplashScreen
