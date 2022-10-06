/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initState = {
    type: null,
    props: null
}

export const modalSlice = createSlice({
    name: "modal",
    initialState: initState,
    reducers: {
        openModal: (state, action) => {
            const {type, props} = action.payload;
            state.type = type;
            state.props = props;
        },

        closeModal: (state, action) => {
            return initState;
        }
    }
});

export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;