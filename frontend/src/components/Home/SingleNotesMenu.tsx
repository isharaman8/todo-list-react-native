import { Box, Menu, Pressable, ThreeDotsIcon } from 'native-base'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useLinkTo } from '@react-navigation/native'
import { COLORS } from '../../constants/colors'
import {
  addEditNote,
  addNotes,
  editNote,
  removeEditNote,
  removeNotes,
} from '../../redux/loginReducer/actions'

function singleNotesMenu(props: any) {
  const [open, setOpen] = useState<boolean>(false)
  const linkTo = useLinkTo()

  const handleSingleNoteDelete = () => {
    props.removeNotes(props.index)
  }
  const handleSingleNoteEdit = () => {
    props.addEditNote(props.item, props.index)
    linkTo('/Edit')
  }
  return (
    <Box style={{ position: 'absolute', right: 5, top: 15, zIndex: 2 }}>
      <Menu
        isOpen={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        closeOnSelect={true}
        onTouchEnd={(e) => e.stopPropagation()}
        trigger={(triggerprops) => {
          return (
            <Pressable
              p={1}
              // style={{
              // 	padding: 2,
              // 	backgroundColor: "green",
              // }}
              accessibilityLabel="More Options"
              {...triggerprops}
              zIndex={3}
              onTouchEnd={(e) => e.stopPropagation()}
            >
              <ThreeDotsIcon
                color={'white'}
                size={4}
                style={{ transform: [{ rotate: `90deg` }] }}
              />
            </Pressable>
          )
        }}
      >
        <Menu.Item onPress={handleSingleNoteDelete}>Delete</Menu.Item>
        <Menu.Item onPress={handleSingleNoteEdit}>Edit</Menu.Item>
      </Menu>
    </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(singleNotesMenu)
