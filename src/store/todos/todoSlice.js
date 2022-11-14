
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        done: false, // 'completed', 'active'

    },
    reducers: {
       
        
        createTodo: (state,  {payload} ) => {
            state.todos.push(payload);
        },
        
        updateToDone: (state,  {payload}  ) => {
            state.done = true;
        },
        
        updateToActive: (state,  {payload}  ) => {
            state.done = false;
        },
        
        deleteTodo: (state,  {payload}  ) => {
            state.todos = state.todos.filter( todo => todo.id !== payload);
        },
        
    }
});

// Action creators are generated for each case reducer function
export const {  createTodo, updateToDone,  updateToActive, deleteTodo } = todoSlice.actions;