import {configureStore} from '@reduxjs/toolkit'
 import counterReducer from './slice'
 import productSlice from './productSlice'

export default configureStore(
    {
        reducer:{
            counter: counterReducer,
            products:productSlice
        }
    }
)
