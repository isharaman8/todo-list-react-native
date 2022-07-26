// import "react-native-gesture-handler";
import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainEntry from './src/screens'
import { Provider } from 'react-redux'
import store from './src/redux/store'

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

// extend the theme
export const theme = extendTheme({ config })
type MyThemeType = typeof theme
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <MainEntry />
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  )
}
