import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isUserSubmit: false,
    isLoading: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setUserSubmit(state, action) {
            return {
                isUserSubmit: action.payload
            }
        },
        setIsLoading(state, action) {
            return {
                isLoading: action.payload
            }
        }
    }
});

export const {
    setUserSubmit,
    setIsLoading
} = appSlice.actions;

export default appSlice.reducer;