import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pronosticos: [],
    pronosticosMin: [],
}

export const climaSlice = createSlice({
    name: "clima",
    initialState,
    reducers: {
        guardarPronosticos: (state, action) => {
            state.pronosticos = action.payload.temperature_2m_max
            state.pronosticosMin = action.payload.temperature_2m_min
        }
    }
})

export const { guardarPronosticos } = climaSlice.actions;

export default climaSlice.reducer;