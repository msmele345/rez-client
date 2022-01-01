import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isUserSubmit: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setUserSubmit(state, action) {
            return {
                isUserSubmit: action.payload
            }
        }
    }
});

export const {setUserSubmit} = appSlice.actions;
export default appSlice.reducer;