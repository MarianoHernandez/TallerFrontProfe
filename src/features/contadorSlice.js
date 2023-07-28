import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cuenta: 44
}

export const contadorSlice = createSlice({
    name: "contador",
    initialState,
    reducers: {
        incrementar: (state) => {
            //immer
            state.cuenta++;
        },
        decrementar: state => {
            state.cuenta--;
        },
        resetear: (state, action) => {
            state.cuenta = action.payload;
        }
    }
})

export const { incrementar, decrementar, resetear } = contadorSlice.actions;

export default contadorSlice.reducer;