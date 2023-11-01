import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice"
import formReducer from "./formSlice"
import { usersApi } from "./apis/usuarios";


export const store = configureStore({
    reducer: {
        user: userReducer,
        form: formReducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
})