import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		num: 0,
	},
	reducers: {
		increment: (state, action) => {
			state.num += 1;
		},
		decrement: (state, action) => {
			state.num -= 1;
		},
	}
})

export const { increment, decrement, } = counterSlice.actions
export default counterSlice.reducer;