import React, { Component } from 'react'
import { SplashScreen } from 'rhinoui'

export default class App extends Component {
  render () {
    return (
      <div>
        <SplashScreen 
          theme='dark'
          borderRadius={15}
          style={{'margin': 0, 'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)'}}
          size={300}
          img='https://placeimg.com/300/300/any/grayscale' 
          title='Create your first contact!' 
          buttonText='Create new contact...'/>
      </div>
    )
  }
}
