import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../feature/countSlice'

export default configureStore({
    reducer: {
        count: countReducer,
    }
})