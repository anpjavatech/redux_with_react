import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = {counter:0, showCounter:true};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment: (state)=>{
            state.counter++;
        },
        decrement: (state)=>{
            state.counter--;
        },
        toggle: (state)=>{
            state.showCounter = !state.showCounter;
        }
    }
});


export const {increment, decrement, toggle} = counterSlice.actions;
export default counterSlice.reducer;