import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { notesReducer } from './loginReducer/reducer'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  notes: notesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export default store

let persistor = persistStore(store)

export { persistor }

store.subscribe(() => {
  console.log('Store State', store.getState())
})
