import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      name: "Person",
    },
  ],
};

const userReducer = createSlice({
  name: "Person",
  initialState,
  reducers: {
    setUsers: (state,action)=>{
        state.list = action.payload;
    }
  },
});

export const {setUsers} = userReducer.actions;
export default userReducer.reducer;
