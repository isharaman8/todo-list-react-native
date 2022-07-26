import {
  ADD_NOTES,
  REMOVE_NOTES,
  ADD_EDIT_NOTES,
  REMOVE_EDIT_NOTES,
  EDIT_NOTE,
} from './actionTypes'

export const addNotes = (payload: any) => {
  return { type: ADD_NOTES, payload }
}

export const removeNotes = (payload: number) => {
  return { type: REMOVE_NOTES, payload }
}

export const addEditNote = (payload: any, index: number) => {
  return { type: ADD_EDIT_NOTES, payload, index }
}

export const editNote = (payload: any, index: number) => {
  return { type: EDIT_NOTE, payload, index }
}

export const removeEditNote = () => {
  return { type: REMOVE_EDIT_NOTES }
}
