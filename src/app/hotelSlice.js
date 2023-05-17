import { createSlice } from "@reduxjs/toolkit";


const initialState={
    list : [{
        id:1,
        name : "Hotel1",
    }]
}


const hotelReducer = createSlice({
    name:"hotel",
    initialState, 
    reducers:{

    }
})


export const{} = hotelReducer.actions;
export default hotelReducer.reducer;