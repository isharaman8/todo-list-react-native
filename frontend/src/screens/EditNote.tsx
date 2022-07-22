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

function EditNote(props: any) {
  const toast = useToast()
  const linkTo = useLinkTo()
  const {
    notes: {
      editNote: { content, title, index },
    },
    addEditNote,
    removeEditNote,
    addNotes,
    removeNotes,
    editNote,
  } = props

  const [heading, setHeading] = useState<string>(title || '')
  const [mContent, setmContent] = useState<string>(content || '')
  const [mIndex, setMIndex] = useState<number>(index || 0)

  useEffect(() => {
    setHeading(title || '')
    setmContent(content || '')
    setMIndex(index || 0)
  }, [content, title])

  const handleUpdateEditNote = () => {
    if (heading && mContent) {
      if (!isNaN(mIndex)) {
        editNote({ content: mContent, title: heading }, mIndex)
      } else addNotes({ content: mContent, title: heading })
      linkTo('/Home')
    } else
      toast.show({
        title: 'Heading and content both required',
        placement: 'bottom',
      })
  }
  const handleDeleteEditNote = () => {
    if (!isNaN(mIndex)) removeNotes(mIndex)

    removeEditNote()

    linkTo('/Home')
  }

  return (
    <View>
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
          _dark={{ background: 'amber.400' }}
          _light={{ background: 'blue.400' }}
          placeholder={'Notes Heading'}
          value={heading}
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
          m={5}
          borderWidth={0}
          placeholder="Write notes in details."
          alignItems={'flex-start'}
          fontSize={'18'}
          value={mContent}
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
    removeEditNote: (payload: any) => dispatch(removeEditNote(payload)),
    editNote: (payload: any, index: number) =>
      dispatch(editNote(payload, index)),
    addNotes: (payload: any) => dispatch(addNotes(payload)),
    removeNotes: (index: number) => dispatch(removeNotes(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote)
