import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value: number;
}

const initialState:CounterState = {
    value: 0
};

const counterslice = createSlice({
    name: 'counter',      //
    initialState,        //
    reducers:{
        //increment
        increment(state){
            state.value++;
        },
        //amount to add
        amountadded(state,action: PayloadAction<number>){
            state.value += action.payload;
        }
        //decrement
        //reset
    }           //
});

export const {increment,amountadded} = counterslice.actions;

export default counterslice.reducer;