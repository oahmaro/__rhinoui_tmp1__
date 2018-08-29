import React, { Component, Fragment } from 'react'
import { 
  AppSelector,
  Box,
  Provider,
  SplashScreen,
  Text} from 'rhinoui'

export default class App extends Component {
  render () {
    return (
      <div>
        <Provider theme='dark' locale='ar'>
          <Fragment>
            <Box 
              height={36}
              color='fill6'
              borderBottom={0.5}
              position='relative'
              zIndex={3}>
                <AppSelector></AppSelector>
            </Box>
            <Box 
              height={36}
              color='fill4'
              borderBottom={0.5}
              shadowColor='black'
              shadowY={1}
              shadowRadius={10}
              shadowOpacity={0.25}
              zIndex={1}>
              <Text 
                lineHeight={36} 
                color='primary'
                link
                translation='أسامه أحمرو'>Osama Ahmaro</Text>
              </Box>
              <SplashScreen 
                size={150}
                title='Create your first contact!'
                subTitle= 'Create new contact...'
                center
                translation={{placeholder: 'لا يوجد صوره', title: 'أنشئ جهة الاتصال الاولى الخاصه بك!', subTitle: 'أنشئ جهة اتصال جديده...'}}
                />
              <Box 
                position='absolute' 
                bottom 
                height={32}
                width='100%'
                color='fill4'
                borderTop={1}
                shadowY={1}
                shadowRadius={10}
                shadowOpacity={0.25}></Box>
          </Fragment>
        </Provider>
      </div>
    )
  }
}
