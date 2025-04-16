import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggleMenu'

const store = configureStore({
    reducer : {
        menu : toggleReducer
    }
});

export default store;