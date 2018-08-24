import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as colors from '../../utils/colors'
import Radium from 'radium'
import AppSelector from '../AppSelector'
import Color from 'color'

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
    light: PropTypes.bool,
    dark: PropTypes.bool,
    style: PropTypes.object,
    bottom: PropTypes.bool,
    shadowColor: PropTypes.string,
    shadowOffset: PropTypes.object,
    shadowOpacity: PropTypes.number,
    shadowRadius: PropTypes.number,
    data: PropTypes.object
  }

  static defaultProps = {
    height: 36,
    borderWidth: 1,
    mainColor: 'black',
    workspaceColor: 'black',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 0
  }

  render() {
    const {
      shadowColor,
      shadowOffset,
      shadowRadius,
      height, bottom,
      borderWidth,
      borderColor,
      shadowOpacity,
      dark,
      light,
      style,
      mainColor,
      workspaceColor,
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
          height: `${height}px`,
          background: `${mainColor}`,
          boxSizing: 'border-box',
          borderTop: bottom && `${borderWidth}px solid`,
          borderBottom: !bottom && `${borderWidth}px solid`,
          borderColor: `${borderColor}`
        },
        dark: {
          background: `${colors.grey1}`,
          borderColor: `${colors.black4}`
        },
        state: {
          bottom: {
            borderTop: `${borderWidth}px solid`,
            borderColor: `${borderColor}`
          }
        }
      },
      workspacePanel: {
        base: {
          display: 'flex',
          height: '36px',
          background: `${workspaceColor}`,
          boxSizing: 'border-box',
          borderTop: bottom && `${borderWidth}px solid`,
          borderBottom: !bottom && `${borderWidth}px solid`,
          borderColor: `${borderColor}`
        },
        dark: {
          background: `${colors.black2}`,
          borderColor: `${colors.black4}`
        },
        state: {
          bottom: {
            borderTop: `${borderWidth}px solid`,
            borderColor: `${borderColor}`
          }
        }
      }
    }

    const { container, mainPanel, workspacePanel } = styles

    const styledContainer = [style, container.base, (bottom && container.state.bottom)]
    const styledMainPanel = [mainPanel.base, ((dark && mainPanel.dark) || (light && mainPanel.light)), (bottom && mainPanel.state.bottom)]
    const styledWorkspacePanel = [workspacePanel.base, ((dark && workspacePanel.dark) || (light && workspacePanel.light)), (bottom && workspacePanel.state.bottom)]

    return (
      <div style={styledContainer}>
        <div style={styledMainPanel}>
          <AppSelector selectedApp={this.state.selectedApp} menus={data} />
        </div>
        <div style={styledWorkspacePanel}><p /></div>
      </div>
    )
  }
}

export default Radium(MenuBar)
