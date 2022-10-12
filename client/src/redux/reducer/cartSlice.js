import { createSlice } from "@reduxjs/toolkit"
import { PURGE } from "redux-persist";

const initState = {
    items: 0
}

export const cartSlice = createSlice({
    name: 'cartItems',
    initialState: initState,
    reducers: {
        addCartData: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, () => initState);
    },
});

export const {addCartData} = cartSlice.actions;
export default cartSlice.reducer;