import React, { Component } from 'react'
import { SplashScreen, MenuBar } from 'rhinoui'

export default class App extends Component {
  render () {
    return (
      <div>
        <MenuBar dark />
        <SplashScreen dark center />
      </div>
    )
  }
}

const data = {
  contacts: {
    title: 'Contacts',
    icon: './contacts.png',
    menus: {
      configuration: {
        title: 'Configuration',
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
            title: 'Bank Accounts',
          },
          curriences: {
            title: 'Curriences',
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
