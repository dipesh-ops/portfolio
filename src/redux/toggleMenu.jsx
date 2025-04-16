import { createSlice } from "@reduxjs/toolkit";

const toggleMenuSlice = createSlice({
    name : 'menu',
    initialState : {
        toggleMenu : false
    },  
    reducers : {
        toggleClick : (state) =>{
            state.toggleMenu = !state.toggleMenu
        }
    }
})

export const {toggleClick} = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;