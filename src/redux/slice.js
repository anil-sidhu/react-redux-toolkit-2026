import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        user:{}
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        bulkChange: (state, action) => {
            console.log(action);
            if (action.payload) {
                state.value += parseInt(action.payload);
            }

        },
         addUserData: (state, action) => {
            console.log(action);
            if (action.payload) {
                state.user = action.payload
            }

            //  console.log(state.value);

        }
    }
})

export const { increment, bulkChange,addUserData } = counterSlice.actions
export default counterSlice.reducer