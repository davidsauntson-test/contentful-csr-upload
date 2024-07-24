import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        setScreen: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setScreen } = screenSlice.actions

export default screenSlice.reducer