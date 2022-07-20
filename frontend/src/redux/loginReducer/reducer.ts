import {
  ADD_EDIT_NOTES,
  ADD_NOTES,
  REMOVE_EDIT_NOTES,
  REMOVE_NOTES,
} from './actionTypes'

const initialState: any = { notes: [], editNote: {} }

export const notesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_NOTES:
      return { ...state, notes: action.payload }
    case REMOVE_NOTES:
      return {
        ...state,
        notes: state.notes.filter(
          (singleNote: any, index: number) => index !== action.payload
        ),
      }
    case ADD_EDIT_NOTES:
      return { ...state, editNote: action.payload }

    case REMOVE_EDIT_NOTES:
      return { ...state, editNote: {} }

    default:
      return state
  }
}
