import { Box, Menu, Pressable, ThreeDotsIcon } from 'native-base'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { COLORS } from '../../constants/colors'
import { addEditNote, removeEditNote } from '../../redux/loginReducer/actions'

export default (props: any) => {
  const [open, setOpen] = useState<boolean>(false)
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
        <Menu.Item>Text</Menu.Item>
        <Menu.Item>Text</Menu.Item>
      </Menu>
    </Box>
  )
}
