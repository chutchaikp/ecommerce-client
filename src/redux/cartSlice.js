import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [], // [ { product: {}, quantity: 1, } ]
		isFetching: false,
		error: '',
	},
	reducers: {
		addItem: (state, action) => {
			// { product: {}, quantity: 1 }			
			// TODO: check duplicate product
			state.items = [...state.items, action.payload]
		},
		removeItem: (state, action) => {
			const productId = action.payload.product.id
			const items = state.items.filter(it => it.product.id !== productId);
			state.items = items;
		},
		resetItems: (state) => {
			state.items = []
		},
		checkProxyData: (state) => {
			debugger;
			var { product } = { ...[...state.items][0], }
			debugger;
			const myProduct = { ...product }
			debugger;
			const { attributes } = { ...product }
			debugger;
			const myAttributes = { ...attributes }
			debugger;
			// state.items = []
		},
		increseQuantity: (state, action) => {

			state.items = state.items.map(it => {
				if (it.product.id === action.payload.product.id) {
					return { ...it, quantity: it.quantity + 1 }
				}
				return it
			})
		},
		decreaseQuantity: (state, action) => {
			// product = action.payload
			state.items = state.items.map(it => {
				if (it.product.id === action.payload.product.id) {
					return { ...it, quantity: it.quantity - 1 }
				}
				return it
			})
		}
	}
})

export const { addItem, removeItem, resetItems, increseQuantity, decreaseQuantity, } = cartSlice.actions
export default cartSlice.reducer;