import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import classnames from 'classnames'

class SplashScreen extends Component {
  static propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    buttonText: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.object,
    borderRadius: PropTypes.number,
    theme: PropTypes.string,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    titleColor: PropTypes.string,
    buttonTextColor: PropTypes.string,
    onClick: PropTypes.func
  }

  render() {
    const {
      title,
      img,
      buttonText,
      size,
      style,
      borderRadius,
      theme,
      borderWidth,
      borderColor,
      titleColor,
      buttonTextColor,
      onClick
    } = this.props

    return (
      <div style={style}>
        <img
          className={classnames({
            [`${styles.img}`]: true
          })}
          style={{'borderRadius': `${borderRadius}px`, 'border': `${borderWidth}px solid ${borderColor}`}}
          width={size}
          height={size}
          src={img}
          alt='splash-screen'
          draggable={false}
        />

        <p style={{'color': `${titleColor}`}} className={classnames({
          [`${styles.title}`]: true,
          [`${styles.dark}`]: theme === undefined || 'dark',
          [`${styles.light}`]: theme === 'light'
        })}>{title}</p>

        <a
          onClick={onClick}
          style={{'color': `${buttonTextColor}`}}
          className={classnames({
            [`${styles.buttonText}`]: true,
            [`${styles.dark}`]: theme === undefined || 'dark',
            [`${styles.light}`]: theme === 'light'
          })}>{buttonText}</a>
      </div>
    )
  }
}

export default SplashScreen
