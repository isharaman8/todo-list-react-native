import {
  View,
  Center,
  Input,
  TextArea,
  Box,
  CheckIcon,
  DeleteIcon,
  useToast,
} from 'native-base'
import React, { useEffect, useState } from 'react'
import { Pressable } from 'react-native'
import { connect } from 'react-redux'
import {
  addEditNote,
  addNotes,
  editNote,
  removeEditNote,
  removeNotes,
} from '../redux/loginReducer/actions'
import { useLinkTo } from '@react-navigation/native'
import { COLORS } from '../constants/colors'

function EditNote(props: any) {
  const toast = useToast()
  const linkTo = useLinkTo()
  const {
    notes: {
      editNote: { content, title, index },
      notes,
    },
    addEditNote,
    removeEditNote,
    addNotes,
    removeNotes,
    editNote,
  } = props

  const [heading, setHeading] = useState<string | null>(title)
  const [mContent, setmContent] = useState<string | null>(content)
  const [mIndex, setMIndex] = useState<number | null>(index)

  useEffect(() => {
    setHeading(title || null)
    setmContent(content || null)

    if (index !== null) setMIndex(index)
  }, [content, title])

  const handleUpdateEditNote = async () => {
    if (heading && mContent) {
      if (mIndex !== null) {
        editNote({ content: mContent, title: heading }, mIndex)
      } else addNotes({ content: mContent, title: heading })

      removeEditNote()
      setHeading(null)
      setmContent(null)
      setMIndex(null)
      linkTo('/Home')
    } else
      toast.show({
        title: 'Heading and content both required',
        placement: 'bottom',
      })
  }
  const handleDeleteEditNote = async () => {
    if (mIndex !== null) removeNotes(mIndex)

    removeEditNote()
    linkTo('/Home')
  }

  return (
    <View
      _dark={{
        backgroundColor: COLORS.mainScreenBackground.dark,
        color: 'black',
      }}
      style={{ height: '100%' }}
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          width: '90%',
          marginTop: 30,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 10,
        }}
      >
        <Pressable onTouchEnd={handleUpdateEditNote}>
          <CheckIcon style={{ color: 'black' }} size={5} />
        </Pressable>

        <Pressable onTouchEnd={handleDeleteEditNote}>
          <DeleteIcon style={{ color: 'black' }} size={5} />
        </Pressable>
        {/* <ThreeDotsIcon
          style={{ color: 'black', transform: [{ rotate: `90deg` }] }}
          size={5}
          /> */}
      </Box>
      <Center>
        <Input
          _dark={{ background: 'amber.400', color: 'black' }}
          _light={{ background: 'blue.400', color: 'black' }}
          placeholder={'Notes Heading'}
          value={heading as string | undefined}
          fontSize={'20'}
          borderLeftWidth={0}
          borderRightWidth={0}
          borderTopWidth={0}
          onChangeText={(text) => setHeading(text)}
          pt={4}
          mr={5}
          ml={5}
          mt={1}
        />
        <TextArea
          _dark={{ color: 'black' }}
          _light={{ color: 'black' }}
          m={5}
          borderWidth={0}
          placeholder="Write notes in details."
          alignItems={'flex-start'}
          fontSize={'18'}
          value={mContent as string | undefined}
          onChangeText={(text: string) => setmContent(text)}
        />
      </Center>
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
    removeEditNote: () => dispatch(removeEditNote()),
    editNote: (payload: any, index: number) =>
      dispatch(editNote(payload, index)),
    addNotes: (payload: any) => dispatch(addNotes(payload)),
    removeNotes: (index: number) => dispatch(removeNotes(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote)
