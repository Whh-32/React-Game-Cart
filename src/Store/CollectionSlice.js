import { createSlice } from "@reduxjs/toolkit";

const initialState = {collection: []}

export const collectionSlice = createSlice({
    name: 'collection',
    initialState: initialState,
    reducers:{
        add: (state, action) => {
            state.collection.push(action.payload);
        },
        remove: (state, action) => {
            state.collection.pop(slug => slug === action.payload);
        }
    }
});

export const actionCollection = collectionSlice.actions;