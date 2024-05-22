import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import repositoriesReducer from './slices/repositoriesSlice'

const rootReducer = combineReducers({
  repositories: repositoriesReducer
})

export const persitedReducer = persistReducer({
  key: 'growtwitter', // chave no localStorage
  storage // localStorage
}, rootReducer)