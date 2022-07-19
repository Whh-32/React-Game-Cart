import { configureStore } from '@reduxjs/toolkit';

import { collectionSlice } from './CollectionSlice';

const store = configureStore({
    reducer: {collection: collectionSlice.reducer}
});

export default store;