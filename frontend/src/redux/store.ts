import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { notesReducer } from './loginReducer/reducer'

const rootReducer = combineReducers({
  notes: notesReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

store.subscribe(() => {
  console.log(store.getState())
})
