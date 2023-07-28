import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tareas: []
}

export const tareasSlice = createSlice({
    name: "tareas",
    initialState,
    reducers: {
        guardarTareas: (state, action) => {
            state.tareas = action.payload
        },
        agregarTarea:(state, action) => {
            //immer
            state.tareas.push(action.payload);
        }
    }
})

export const { guardarTareas, agregarTarea } = tareasSlice.actions;

export default tareasSlice.reducer;