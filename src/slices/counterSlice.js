import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        id: 0,
        name: '',
        link: '',
        keywords: [],
        status: true,
        
    },
    reducers: {
        
        addingGIF: (state, action) => {
            state.id = action.payload.id,
            state.name = action.payload.name,
            state.link = action.payload.link,
            state.keywords = action.payload.keywords,
            state.status = action.payload.status
            
        }
    }
})

// Action creators are generated for each case reducer function
export const { addingGIF } = counterSlice.actions

export default counterSlice.reducer