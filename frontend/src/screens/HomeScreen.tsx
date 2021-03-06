import {
  Center,
  FlatList,
  Input,
  SearchIcon,
  useColorMode,
  View,
} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import AddNoteButton from '../components/Home/AddNoteButton'
import { COLORS } from '../constants/colors'
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
  const [mNotes, setMNotes] = useState<Array<INotes>>([])
  const { colorMode } = useColorMode()

  const getNotesFromAsyncStorage = async (): Promise<any> => {
    let asyncNotes = await AsyncStorage.getItem('storagenotes')
    if (asyncNotes) asyncNotes = JSON.parse(asyncNotes)

    return asyncNotes
  }

  useEffect(() => {
    setMNotes(notes.notes)
  }, [notes])

  const handleSearchInput = (text: string) => {
    if (text) {
      const filteredArray: INotes[] = mNotes.filter(
        (sNote: INotes) =>
          sNote.content.toLowerCase().includes(text.toLowerCase()) ||
          sNote.title.toLowerCase().includes(text.toLowerCase())
      )
      setMNotes(filteredArray)
    } else setMNotes(notes.notes)
  }

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
        onChangeText={(text: string) => handleSearchInput(text)}
        InputLeftElement={
          <SearchIcon
            name="search"
            size={25}
            style={{ marginLeft: 8, color: 'grey' }}
          />
        }
      />
      {/* <ScrollView> */}
      <Center
        mt={2}
        style={{
          width: '94%',
          // borderColor: 'red',
          // borderWidth: 3,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <FlatList
          data={mNotes}
          numColumns={2}
          style={{ width: '100%', height: '100%' }}
          _contentContainerStyle={{
            flex: 1,
            justifyContent: 'flex-start',
            width: '100%',
          }}
          keyExtractor={(item: any) =>
            item.title + Date.now() + Math.random() * 100
          }
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
