import { configureStore } from "@reduxjs/toolkit";
import climasReducer from '../features/climaSlice'
export const store = configureStore({
    reducer: {
        clima:climasReducer
    }
})