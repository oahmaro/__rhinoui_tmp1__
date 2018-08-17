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
