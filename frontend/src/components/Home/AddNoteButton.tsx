import { Text, useColorMode, View } from 'native-base'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants/colors'
import { useLinkTo } from '@react-navigation/native'
import { addEditNote, removeEditNote } from '../../redux/loginReducer/actions'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 60,
    position: 'absolute',
    right: 20,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
  },
})

function AddNoteButton({ notes, addEditNote, removeEditNote }: any) {
  const { colorMode } = useColorMode()
  const linkTo = useLinkTo()

  const handleAddNewNote = () => {
    removeEditNote()
    linkTo('/Add')
  }

  return (
    // <View>
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        ...styles.button,
        backgroundColor:
          colorMode === 'dark' ? COLORS.button.dark : COLORS.button.light,
      }}
      onPress={handleAddNewNote}
    >
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteButton)
