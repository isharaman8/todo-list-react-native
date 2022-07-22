import {
  Box,
  Center,
  FlatList,
  Input,
  InputGroup,
  ScrollView,
  SearchIcon,
  Spacer,
  useColorMode,
  View,
} from 'native-base'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import AddNoteButton from '../components/Home/AddNoteButton'
import { COLORS } from '../constants/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { DUMMY_DATA } from '../constants/dummy'
import NotesRenderer from '../components/Home/NotesRenderer'
import { INotes } from '../constants/types'
import { connect } from 'react-redux'
import { addEditNote, removeEditNote } from '../redux/loginReducer/actions'

const styles = StyleSheet.create({
  mainview: { height: '100%' },
  input: {
    width: '90%',
    height: 60,
  },
  hstack: {
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
  },
})

function HomeScreen({ notes, addEditNote, removeEditNote }: any) {
  const [mNotes, setMNotes] = useState<Array<INotes>>(notes)
  const { colorMode } = useColorMode()

  useEffect(() => {
    console.log(mNotes)
  }, [])
  return (
    <View
      style={{
        ...styles.mainview,
        backgroundColor:
          colorMode === 'dark'
            ? COLORS.mainScreenBackground.dark
            : COLORS.mainScreenBackground.light,
      }}
    >
      <Input
        width="90%"
        mr={'auto'}
        ml="auto"
        mt={10}
        height={'50'}
        style={{ ...styles.input }}
        placeholder="Search Notes"
        fontSize={18}
        borderRadius={15}
        InputLeftElement={
          <SearchIcon
            name="search"
            size={25}
            style={{ marginLeft: 8, color: 'grey' }}
          />
        }
      />
      {/* <ScrollView> */}
      <Center mt={2}>
        <FlatList
          data={mNotes.notes}
          numColumns={2}
          keyExtractor={(item) => item.title + Date.now() + Math.random() * 100}
          renderItem={({ item, index }: any) => {
            return <NotesRenderer item={item} index={index} />
          }}
        />
      </Center>
      {/* </ScrollView> */}
      <AddNoteButton />
    </View>
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
    removeEditNote: (payload: any) => dispatch(removeEditNote(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
