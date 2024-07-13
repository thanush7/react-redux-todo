import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const customerSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        addTask(state,action){
            state.push(action.payload)
        },
        deleteTask(state,action){
            const deleteIndex=action.payload;
           return state.filter((val,index)=>(index!==deleteIndex))
        }
    }
}
)

export const {addTask,deleteTask}=customerSlice.actions;
export default customerSlice.reducer