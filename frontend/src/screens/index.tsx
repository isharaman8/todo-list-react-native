import { createDrawerNavigator } from '@react-navigation/drawer'
import { useColorMode } from 'native-base'
import React from 'react'
import CustomDrawer from '../components/CustomDrawer'
import { COLORS } from '../constants/colors'
import EditNote from './EditNote'
import HomeScreen from './HomeScreen'
import About from './Notifications'
import Todos from './TodosScreen'

const Drawer = createDrawerNavigator()

export default function MainEntry() {
  const { colorMode } = useColorMode()
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor:
          colorMode === 'dark'
            ? COLORS.customDrawerPanel.dark
            : COLORS.customDrawerPanel.light,

        drawerActiveTintColor: 'white',
      }}
      drawerContent={(props: any) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Todo" component={Todos} />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerItemStyle: {
            height: 0,
          },
        }}
      />
      <Drawer.Screen
        name="Edit"
        options={{
          drawerItemStyle: {
            height: 0,
          },
        }}
        component={EditNote}
      />
      <Drawer.Screen
        name="Add"
        options={{
          drawerItemStyle: {
            height: 0,
          },
        }}
        component={EditNote}
      />
    </Drawer.Navigator>
  )
}
