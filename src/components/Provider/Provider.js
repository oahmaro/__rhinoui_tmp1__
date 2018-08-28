import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../utils/colors'
import { sizes } from '../../utils/sizes'
import { ThemeContext } from '../../utils/contextProviders'
import './fonts.css'

class Provider extends Component {
  state = {
    theme: 'dark',
    setTheme: this.setTheme,
    language: {
      locale: 'en',
      direction: 'ltr'
    },
    setLanguage: this.setLanguage
  }

  componentDidMount() {
    this.props.theme && this.setTheme(this.props.theme)
    this.props.locale && this.setLanguage(this.props.locale)
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
    theme: PropTypes.oneOf(['light', 'dark']),
    locale: PropTypes.oneOf(['en', 'ar'])
  }

  setTheme = theme => {
    this.setState({ theme })
  }

  setLanguage = locale => {
    if (locale === 'en') {
      this.setState({
        language: {
          locale: 'en',
          direction: 'ltr'
        }
      })
    }
    if (locale === 'ar') {
      this.setState({
        language: {
          locale: 'ar',
          direction: 'rtl'
        }
      })
    }
  }

  render() {
    const ID = () => '_' + Math.random().toString(36).substr(2, 9)
    const childrenWithKey = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        key: ID()
      })
    })
    return (
      <ThemeContext.Provider value={{
        theme: this.state.theme,
        setTheme: this.state.setTheme,
        language: this.state.language,
        setLanguage: this.state.setLanguage,
        colors: ((this.state.theme === 'dark' && colors.dark) || (this.state.theme === 'light' && colors.light)),
        sizes
      }}>
        {childrenWithKey}
      </ThemeContext.Provider>
    )
  }
}

export default Provider
