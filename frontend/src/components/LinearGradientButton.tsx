import { LinearGradient } from 'expo-linear-gradient'
import { Button, Link, Text } from 'native-base'
import { ABOUTBUTTON, LINEARLINE } from '../constants/colors'
import React, { useRef, useState } from 'react'
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

interface ILinearProps {
  url: string
  bgColor: string[]
  textColor: string
  text: string
}

const styles = StyleSheet.create({
  topBody: {
    ...ABOUTBUTTON,
  },
  linear: {
    ...LINEARLINE,
  },
})

export default function LinearGradientButton({
  url,
  bgColor,
  textColor,
  text,
}: ILinearProps) {
  const [tap, setTap] = useState(false)
  const animation = new Animated.Value(0)
  const inputRange = [0, 1]
  const outputRange = [1, 0.8]
  const scale = animation.interpolate({ inputRange, outputRange })

  return (
    <TouchableOpacity style={{ ...styles.topBody }}>
      <Link href={url} isExternal>
        <LinearGradient
          colors={[...bgColor, 'rgba(255, 255, 255, 0.8)']}
          style={{ ...styles.linear, borderRadius: 10, height: 50 }}
        >
          <Text
            style={{ color: textColor, fontWeight: '600', fontSize: 14 }}
            textAlign="center"
          >
            {text}
          </Text>
        </LinearGradient>
      </Link>
    </TouchableOpacity>
  )
}
