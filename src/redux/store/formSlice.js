import { createSlice } from "@reduxjs/toolkit";


const initialFormState = {
    id: "",
    name: "",
    username: "",
    email: ""
}
const formSlice = createSlice({
    name: "form",
    initialState: initialFormState,
    reducers: {
        changeForm: (state, action) => {
            const { element, value } = action.payload
            state[element] = value
        },
        editForm: (state, action) => {
            const { id, name, username, email } = action.payload
            state.id = id
            state.name = name
            state.username = username
            state.email = email
        },
        resetForm: (state, action) => {
            return initialFormState
        }
    }
})
export const { changeForm, editForm, resetForm } = formSlice.actions
export default formSlice.reducer