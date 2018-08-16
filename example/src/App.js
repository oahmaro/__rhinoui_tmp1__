import React, { Component } from 'react'
import { SplashScreen } from 'rhinoui'

export default class App extends Component {
  render () {
    return (
      <div>
        <SplashScreen 
          theme='dark'
          borderRadius={16}
          borderWidth={1}
          borderColor='#191919'
          center
          size={200}
          img='https://placeimg.com/300/300/any/grayscale' 
          title='Create your first contact!' 
          link='Create new contact...'/>
      </div>
    )
  }
}
