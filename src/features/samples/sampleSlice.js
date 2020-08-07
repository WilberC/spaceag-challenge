import {createSlice} from "@reduxjs/toolkit"

const samplesSlice = createSlice({
    name: 'samples',
    initialState: {
        samples: [],
    },
    reducers: {
        addSample: (state, action) => {
            state.samples = [...state.samples, {
                id: state.samples.length + 1,
                photo: action.payload.photo,
                geoInfo: action.payload.geoInfo
            }]
        }
    }
})

export const {addSample} = samplesSlice.actions

export default samplesSlice.reducer