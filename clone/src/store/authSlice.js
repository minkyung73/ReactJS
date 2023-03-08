import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth", 
    initialState: {
        isAuth: false, 
        isAdmin: false, 
        changed: false,
    },

    reducers: {
        login(state, action) {
            state.isAuth = true;
            state.isAdmin = action.payload.isAdmin;
            state.changed = true;
        }, 
        logout(state, action) {
            state.isAuth = false;
            state.isAdmin = false;
            state.changed = true;
        }, 
        beforeChange(state, action) {
            state.changed = false;
        }, 
        afterChange(state, action) {
            state.changed = true;
        }, 
    }, 
});

export const AuthActions = authSlice.actions;

export default authSlice;