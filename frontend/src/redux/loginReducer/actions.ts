import {
  ADD_NOTES,
  REMOVE_NOTES,
  ADD_EDIT_NOTES,
  REMOVE_EDIT_NOTES,
} from './actionTypes'

export const addNotes = (payload: any) => {
  return { type: ADD_NOTES, payload }
}

export const removeNotes = () => {
  return { type: REMOVE_NOTES }
}

export const addEditNote = (payload: any) => {
  return { type: ADD_EDIT_NOTES, payload }
}

export const removeEditNote = (payload: any) => {
  return { type: REMOVE_EDIT_NOTES, payload }
}
