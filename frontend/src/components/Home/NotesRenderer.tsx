import { Box, Heading, Spacer, Text, useColorMode } from 'native-base'
import React, { useEffect, useRef } from 'react'
import { StyleSheet } from 'react-native'
import Animated, { Easing, EasingNode } from 'react-native-reanimated'
import { connect } from 'react-redux'
import { COLORS } from '../../constants/colors'
import { addEditNote, removeEditNote } from '../../redux/loginReducer/actions'
import SingleNotesMenu from './SingleNotesMenu'
import { useLinkTo } from '@react-navigation/native'

const styles = StyleSheet.create({
  animatedView: {
    width: '45%',
    margin: 7,
    shadowColor: 'black',
    shadowOffset: { width: 12, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
  },
})

const NotesRenderer = ({
  item,
  notes,
  addEditNote,
  removeEditNote,
  index,
}: any) => {
  const { colorMode } = useColorMode()
  const linkTo = useLinkTo()
  const fadeAnim = useRef(new Animated.Value(1)).current

  const touchStartAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      easing: EasingNode.linear,
    }).start()
  }

  const touchEndAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      easing: EasingNode.linear,
    }).start()
  }

  return (
    // <Animated.View
    // 	style={{
    // 		...styles.animatedView,
    // 		opacity: fadeAnim,
    // 		backgroundColor:
    // 			colorMode === "light" ? COLORS.notes.light : COLORS.notes.dark,
    // 	}}
    // 	onTouchStart={() => touchStartAnimation()}
    // 	onTouchCancel={() => touchEndAnimation()}
    // 	onTouchEndCapture={() => {
    // 		console.log(`Touch Captured`);
    // 		touchEndAnimation();
    // 	}}
    // >
    <Box
      p={3}
      _text={{ color: colorMode === 'dark' ? 'white' : 'black' }}
      w={'100%'}
      style={{ ...styles.animatedView }}
      _light={{ backgroundColor: COLORS.notes.light }}
      _dark={{ backgroundColor: COLORS.notes.dark }}
      position="relative"
      borderRadius={10}
      onTouchStart={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
      onTouchEnd={(e) => {
        addEditNote(item, index)
        linkTo('/Edit')
        e.stopPropagation()
      }}
    >
      <SingleNotesMenu index={index} item={item} />

      <Heading w="92%" fontSize={23} mb={2}>
        {item.title}
      </Heading>
      <Spacer />
      <Text>{item.content}</Text>
    </Box>
    // </Animated.View>
  )
}

const mapStateToProps = (state: any) => {
  return {
    notes: state.notes,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addEditNote: (payload: any, index: number) =>
      dispatch(addEditNote(payload, index)),
    removeEditNote: () => dispatch(removeEditNote()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesRenderer)
