import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:false,
        bodyColor:"white",
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        changeColor:(state,action)=>{
            state.bodyColor="black";
        }
    }

})

export const {toggleMenu,closeMenu,changeColor}=appSlice.actions;

export default appSlice.reducer;