import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as colors from '../../utils/colors'
import Radium from 'radium'
import AppSelector from '../AppSelector'
import Color from 'color'
import Avatar from '../Avatar'

class MenuBar extends Component {
  // Temp state for testing
  state = {
    selectedApp: 'Contacts'
  }

  static propTypes = {
    height: PropTypes.number,
    mainColor: PropTypes.string,
    workspaceColor: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    theme: PropTypes.string,
    style: PropTypes.object,
    position: PropTypes.string,
    shadowColor: PropTypes.string,
    shadowOffset: PropTypes.object,
    shadowOpacity: PropTypes.number,
    shadowRadius: PropTypes.number,
    data: PropTypes.object
  }

  static defaultProps = {
    height: 36,
    borderWidth: 1,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 0,
    position: 'top',
    theme: 'dark'
  }

  render() {
    const {
      shadowColor,
      shadowOffset,
      shadowRadius,
      height,
      borderWidth,
      borderColor,
      shadowOpacity,
      theme,
      style,
      mainColor,
      workspaceColor,
      position,
      data
    } = this.props

    const colorF = Color(shadowColor)

    const styles = {
      container: {
        base: {
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          boxSizing: 'border-box',
          boxShadow: `${shadowOffset.width}px ${shadowOffset.height}px ${shadowRadius}px rgba(${colorF.red()}, ${colorF.green()}, ${colorF.blue()}, ${colorF.alpha() * shadowOpacity})`,
          zIndex: 3
        },
        state: {
          bottom: {
            flexDirection: 'column-reverse',
            position: 'absolute',
            bottom: 0,
            width: '100%'
          }
        }
      },
      mainPanel: {
        base: {
          display: 'flex',
          justifyContent: 'space-between',
          height: `${height}px`,
          boxSizing: 'border-box'
        },
        dark: {
          background: mainColor ? `${mainColor}` : `${colors.grey1}`,
          borderColor: borderColor ? `${borderColor}` : `${colors.black4}`
        },
        state: {
          top: {
            borderTop: '0px solid',
            borderBottom: `${borderWidth}px solid`
          },
          bottom: {
            borderTop: `${borderWidth}px solid`,
            borderBottom: '0px solid'
          }
        }
      },
      workspacePanel: {
        base: {
          display: 'flex',
          height: '36px',
          background: `${workspaceColor}`,
          boxSizing: 'border-box'
        },
        dark: {
          background: workspaceColor ? `${workspaceColor}` : `${colors.black2}`,
          borderColor: borderColor ? `${borderColor}` : `${colors.black4}`
        },
        state: {
          top: {
            borderTop: '0px solid',
            borderBottom: `${borderWidth}px solid`
          },
          bottom: {
            borderTop: `${borderWidth}px solid`,
            borderBottom: '0px solid'
          }
        }
      }
    }

    const { container, mainPanel, workspacePanel } = styles

    const styledContainer = [style, container.base, ((position === 'top' && container.state.top) || (position === 'bottom' && container.state.bottom))]
    const styledMainPanel = [mainPanel.base, ((position === 'top' && mainPanel.state.top) || (position === 'bottom' && mainPanel.state.bottom)), ((theme === 'dark' && mainPanel.dark) || (theme === 'light' && mainPanel.light))]
    const styledWorkspacePanel = [workspacePanel.base, ((position === 'top' && workspacePanel.state.top) || (position === 'bottom' && workspacePanel.state.bottom)), ((theme === 'dark' && workspacePanel.dark) || (theme === 'light' && workspacePanel.light))]

    return (
      <div style={styledContainer}>
        <div style={styledMainPanel}>
          <AppSelector selectedApp={this.state.selectedApp} menus={data} />
          <Avatar />
        </div>
        <div style={styledWorkspacePanel}><p /></div>
      </div>
    )
  }
}

export default Radium(MenuBar)
