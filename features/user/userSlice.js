import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
})

export const { setData } = userSlice.actions;

export default userSlice.reducer;