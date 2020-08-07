import {configureStore} from '@reduxjs/toolkit';
import samplesReducer from '../features/samples/sampleSlice'

export default configureStore({
    reducer: {
        samples: samplesReducer
    },
});

