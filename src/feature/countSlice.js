import { createSlice } from '@reduxjs/toolkit';

export const countSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },

    reducers: {

        setState: (state, action) => {
            state.value = action.payload
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },

        decrementByAmount: (state, action) => {
            state.value -= action.payload;
        },

        multiplyByAmount: (state, action) => {
            state.value *= action.payload;
        },
        deviseByAmount: (state, action) => {
            state.value /= action.payload;
        }
    }
})

export const { setState, incrementByAmount, decrementByAmount, deviseByAmount, multiplyByAmount } = countSlice.actions;
export default countSlice.reducer