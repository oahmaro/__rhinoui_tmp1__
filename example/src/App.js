import React, { Component } from 'react'
import { SplashScreen, MenuBar, InfoBar } from 'rhinoui'

export default class App extends Component {
  render () {
    return (
      <div>
        <MenuBar dark shadowRadius={10} shadowOffset={{width: 0, height: 1}} shadowOpacity={0.25} />
        <SplashScreen dark center/>
        <InfoBar dark shadowRadius={10} shadowOffset={{width: 0, height: 1}} shadowOpacity={0.25} />
      </div>
    )
  }
}
