import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "./TodosSlice";


const store=configureStore({
    reducer:{
        todos:TodosSlice
    }
})
window.store=store
export default store