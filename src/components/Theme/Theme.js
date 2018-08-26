import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../utils/colors'
import { ThemeContext } from '../../utils/contextProviders'

class Theme extends Component {
  state = {
    theme: 'dark',
    toggleTheme: this.setTheme
  }

  componentDidMount() {
    this.props.theme && this.setTheme(this.props.theme)
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
    theme: PropTypes.oneOf(['light', 'dark'])
  }

  setTheme = theme => {
    this.setState({ theme })
  }

  render() {
    return (
      <ThemeContext.Provider value={{
        theme: this.state.theme,
        toggleTheme: this.state.theme,
        colors: ((this.state.theme === 'dark' && colors.dark) || (this.state.theme === 'light' && colors.light))
      }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default Theme
