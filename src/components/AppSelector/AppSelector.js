import React from 'react'
// import PropTypes from 'prop-types'
import * as colors from '../../utils/colors'
import * as sizes from '../../utils/sizes'
import Radium from 'radium'
import Icons from '../Icons'
import PropTypes from 'prop-types'

function AppSelector(props) {
  const styles = {
    container: {
      base: {
        display: 'flex'
      }
    },
    icon: {
      base: {
        cursor: 'pointer',
        marginLeft: '5px'
      },
      dark: {
        color: colors.white2
      }
    },
    appTitle: {
      base: {
        display: 'block',
        lineHeight: `${props.height}px`,
        cursor: 'pointer',
        userSelect: 'none',
        fontFamily: 'roboto',
        fontSize: `${sizes.s4}px`,
        marginLeft: '10px'
      },
      dark: {
        color: colors.white2
      }
    },
    menusContainer: {
      base: {
        display: 'flex',
        marginLeft: '30px'
      }
    },
    menu: {
      base: {
        display: 'block',
        lineHeight: `${props.height}px`,
        cursor: 'pointer',
        userSelect: 'none',
        fontFamily: 'roboto',
        fontSize: `${sizes.s2}px`,
        marginRight: '25px'
      },
      dark: {
        color: colors.white3
      }
    }
  }

  const onIconClick = () => {
    console.log('Clicked on App Selector!')
  }

  const onAppTitleClick = () => {
    console.log('Clicked on App Title!')
  }

  const onMenuClick = (a) => {
    console.log(`Clicked on ${a}!`)
  }

  const { container, icon, appTitle, menusContainer, menu } = styles
  const { contacts } = props.data.apps
  const menus = Object.keys(contacts.menus)

  // create styled variables that holds base, theme, state styling
  const styledIcon = [icon.base, ((props.dark && icon.dark) || (props.light && icon.light)), icon.state]
  const styledAppTitle = [appTitle.base, ((props.dark && appTitle.dark) || (props.light && appTitle.light)), appTitle.state]
  const styledMenu = [menu.base, ((props.dark && menu.dark) || (props.light && menu.light)), menu.state]

  return (
    <div style={container.base}>
      <a
        onClick={onIconClick}
        style={styledIcon}>
        <Icons color={styledIcon[1].color} icon='app' size={36} />
      </a>
      <a
        style={styledAppTitle}
        onClick={onAppTitleClick}>
        {props.data.apps[props.data.selectedApp].title.english}
      </a>
      <div style={menusContainer.base}>
        {
          menus.map((menu) => {
            return (
              <a
                key={menu}
                style={styledMenu}
                onClick={() => onMenuClick(menu)}>
                {contacts.menus[menu].title.english}
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

AppSelector.propTypes = {
  selectedApp: PropTypes.string,
  dark: PropTypes.bool,
  light: PropTypes.bool,
  height: PropTypes.number,
  data: PropTypes.object
}

AppSelector.defaultProps = {
  dark: true,
  height: 36,
  // dummy data for testing only
  data: {
    selectedApp: 'contacts',
    apps: {
      contacts: {
        title: {
          english: 'Contacts',
          arabic: 'جهات الاتصال'
        },
        icon: './contacts.png',
        menus: {
          configuration: {
            title: {
              english: 'Configuration',
              arabic: 'ترتيب'
            },
            menuItems: {
              contactTags: {
                title: 'Contact Tags'
              },
              contactTitles: {
                title: 'Contact Titles'
              },
              contactGroups: {
                title: 'Contact Groups'
              },
              jobPositions: {
                title: 'Job Position'
              },
              localization: {
                title: 'Localization',
                subMenus: {
                  countries: {
                    title: 'Countries'
                  },
                  cities: {
                    title: 'Cities'
                  },
                  states: {
                    title: 'States'
                  }
                }
              },
              bankAccounts: {
                title: 'Bank Accounts'
              },
              curriences: {
                title: 'Curriences'
              }
            }
          },
          test: {
            title: 'Test',
            menuItems: {
              contactTags: {
                title: 'Contact Tags'
              },
              contactTitles: {
                title: 'Contact Titles'
              },
              contactGroups: {
                title: 'Contact Groups'
              },
              jobPositions: {
                title: 'Job Position'
              },
              localization: {
                title: 'Localization',
                subMenus: {
                  countries: {
                    title: 'Countries'
                  },
                  cities: {
                    title: 'Cities'
                  },
                  states: {
                    title: 'States'
                  }
                }
              },
              bankAccounts: {
                title: 'Bank Accounts'
              },
              curriences: {
                title: 'Curriences'
              }
            }
          }
        }
      },
      accounting: {
        title: 'Accounting',
        icon: './accounting.png',
        menus: {
          test: {
            title: 'Test',
            menuItems: {
              testMenu1: {
                title: 'Test Menu 1'
              },
              testMenu2: {
                title: 'Test Menu 2'
              },
              testMenu3: {
                title: 'Test Menu 3'
              },
              testMenu4: {
                title: 'Test Menu 4'
              },
              testMenu5: {
                title: 'Test Menu 5',
                subMenus: {
                  testSubMenu1: {
                    title: 'Test Sub Menu 1'
                  },
                  testSubMenu2: {
                    title: 'Test Sub Menu 2'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

export default Radium(AppSelector)
