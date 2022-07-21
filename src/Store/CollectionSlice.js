import { createSlice } from "@reduxjs/toolkit";


const initialState = localStorage.getItem('collection') ? {collection: JSON.parse(localStorage.getItem('collection'))} :
    { collection: [] }

export const collectionSlice = createSlice({
    name: 'collection',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.collection.push(action.payload);
            localStorage.setItem('collection', JSON.stringify(state.collection));

        },
        remove: (state, action) => {
            state.collection = state.collection.filter(item => item.slug !== action.payload);
            localStorage.setItem('collection', JSON.stringify(state.collection));
        }
    }
});

export const actionCollection = collectionSlice.actions;