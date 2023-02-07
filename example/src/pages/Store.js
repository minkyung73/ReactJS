import { configureStore, createSlice } from "@reduxjs/toolkit";


let mySlice = createSlice({
    name: 'mySlice', 
    initialState: 'stateValue'
})

let person = createSlice({
    name: 'person', 
    initialState: 'youngwhwan'
})

export default configureStore({
    reducer:{
        mySlice : mySlice.reducer, 
        person : person.reducer
    }
})