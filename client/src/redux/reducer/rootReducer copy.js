import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allAnimals: [],
  detail: []
}

const rootReducer = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    get_animals(state, action) {
        state.allAnimals = action.payload
    }
  }
})

export const { get_animals } = rootReducer.actions
export default rootReducer.reducer;