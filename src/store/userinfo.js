import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user : {
        name:'',
        familyname:'',
        age:'null'
    }
}

export const user = createSlice({
    name:"userinfo",
    initialState,
    reducer: {
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
});

export const { setUser } = user.actions;
export const selectUser = (state) => state.userinfo.date;

export default user.reducer;