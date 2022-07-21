import {
  View,
  Center,
  Input,
  TextArea,
  Box,
  CheckIcon,
  DeleteIcon,
} from 'native-base'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import EditNoteMenu from '../components/Home/EditNoteMenu'
import { addEditNote, removeEditNote } from '../redux/loginReducer/actions'

function EditNote(props: any) {
  const {
    notes: {
      editNote: { content, title },
    },
    addEditNote,
    removeEditNote,
  } = props

  const [heading, setHeading] = useState<string>(title || '')
  const [mContent, setmContent] = useState<string>(content || '')

  useEffect(() => {
    setHeading(title || '')
    setmContent(content || '')
  }, [content, title])

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
        }}
      >
        <CheckIcon style={{ color: 'black' }} size={5} />
        <DeleteIcon style={{ color: 'black' }} size={5} />
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
    addEditNote: (payload: any) => dispatch(addEditNote(payload)),
    removeEditNote: (payload: any) => dispatch(removeEditNote(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote)
