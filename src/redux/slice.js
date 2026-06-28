import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {

            state.value += 1;
            //  console.log(state.value);

        },
        bulkChange: (state, action) => {
            console.log(action);
            if (action.payload) {
                state.value += parseInt(action.payload);
            }

            //  console.log(state.value);

        }
    }
})

export const { increment, bulkChange } = counterSlice.actions
export default counterSlice.reducer