import {configureStore, combineReducers} from '@reduxjs/toolkit'
import reducers from './reducers'

const store = configureStore ({
    reducer: reducers
})

export default store