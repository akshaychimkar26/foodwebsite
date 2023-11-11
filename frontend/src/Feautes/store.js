import { configureStore } from "@reduxjs/toolkit";
import SliceReducer from './Slice'

const Store=configureStore({
    reducer:{
        value:SliceReducer
    }
})

export default Store;