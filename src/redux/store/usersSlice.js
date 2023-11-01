import { createSlice } from "@reduxjs/toolkit";

const initialUsersState = []
const INITIAL_DEFAULT_STATE = initialUsersState

const initialAppState = (() => {
    const persistedState = localStorage.getItem("__redux__state");
    if (persistedState) {
        return JSON.parse(persistedState)
    }
    return INITIAL_DEFAULT_STATE
})()
const userSlice = createSlice({
    name: "user",
    initialState: initialAppState,
    reducers: {
        getUsers: (state, action) => {
            let usersToAdd = action.payload
            return usersToAdd
        },
    }
})

export const { getUsers } = userSlice.actions
export default userSlice.reducer