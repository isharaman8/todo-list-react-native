import {
  ADD_EDIT_NOTES,
  ADD_NOTES,
  EDIT_NOTE,
  REMOVE_EDIT_NOTES,
  REMOVE_NOTES,
} from './actionTypes'

const initialState: any = { notes: [], editNote: {} }

export const notesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_NOTES:
      return { ...state, notes: [...state.notes, action.payload] }
    case REMOVE_NOTES:
      return {
        ...state,
        notes: state.notes.filter(
          (singleNote: any, index: number) => index !== action.payload
        ),
      }
    case ADD_EDIT_NOTES:
      console.log(action)
      return { ...state, editNote: { ...action.payload, index: action.index } }

    case REMOVE_EDIT_NOTES:
      return { ...state, editNote: {} }

    case EDIT_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, action.index),
          { title: action.payload.title, content: action.payload.content },
          ...state.notes.slice(action.index + 1),
        ],
      }

    default:
      return state
  }
}
