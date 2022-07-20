import {
  Box,
  Center,
  FlatList,
  Input,
  InputGroup,
  ScrollView,
  Spacer,
  useColorMode,
  View,
} from 'native-base'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import AddNoteButton from '../components/Home/AddNoteButton'
import { COLORS } from '../constants/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { DUMMY_DATA } from '../constants/dummy'
import NotesRenderer from '../components/Home/NotesRenderer'
import { INotes } from '../constants/types'

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

export default function HomeScreen() {
  const [notes, setNotes] = useState<Array<INotes>>(DUMMY_DATA)
  const { colorMode } = useColorMode()
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
          <MaterialIcons
            name="search"
            size={30}
            style={{ marginLeft: 8, color: 'grey' }}
          />
        }
      />
      {/* <ScrollView> */}
      <Center mt={2}>
        <FlatList
          data={notes}
          numColumns={2}
          keyExtractor={(item) => item.title + Date.now() + Math.random() * 100}
          renderItem={({ item }: any) => {
            return <NotesRenderer item={item} />
          }}
        />
      </Center>
      {/* </ScrollView> */}
      <AddNoteButton />
    </View>
  )
}
