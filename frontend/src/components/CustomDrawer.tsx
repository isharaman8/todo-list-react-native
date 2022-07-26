import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerItem from '@react-navigation/drawer'
import {
  Avatar,
  Button,
  Center,
  Image,
  Link,
  useColorMode,
  View,
} from 'native-base'
import React from 'react'
import { useLinkTo } from '@react-navigation/native'
import ToggleDarkMode from './ToggleDarkMode'
import { COLORS } from '../constants/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Pressable, TouchableOpacity } from 'react-native'

export default function CustomDrawer(props: any) {
  const linkTo = useLinkTo()
  const { colorMode } = useColorMode()
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          colorMode === 'dark'
            ? COLORS.customDrawer.dark
            : COLORS.customDrawer.light,
        paddingTop: 5,
      }}
    >
      <DrawerContentScrollView
        {...props}
        // contentContainerStyle={{ backgroundColor: "#6E85B7" }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      {/* <View style={{ position: "absolute" }}> */}

      <Button
        onPress={() => linkTo('/About')}
        style={{
          // width: "100%",
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 0,
        }}
        backgroundColor="white"
        href="About"
        _text={{
          fontSize: 18,
          textAlign: 'center',
          marginBottom: 1,
          color: 'black',
        }}
        _dark={{
          background:
            colorMode === 'dark'
              ? COLORS.customDrawer.dark
              : COLORS.customDrawer.light,
        }}
      >
        About
      </Button>
      <Center mb={2}>
        <ToggleDarkMode />
      </Center>
      {/* </View> */}
    </View>
  )
}
