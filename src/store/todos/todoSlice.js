
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        // done: false, // 'completed', 'active'

    },
    reducers: {
       
        
        createTodo: (state,  {payload} ) => {
            state.todos.push(payload);
        },
        
        updateTodo: (state,  {payload}  ) => {
           state.todos = state.todos.map( todo =>{
                if (todo.id === payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }
                return todo
            });
        },
        
        deleteTodo: (state,  {payload}  ) => {
            state.todos = state.todos.filter( todo => todo.id !== payload);
        },
        
    }
});

// Action creators are generated for each case reducer function
export const {  createTodo, updateTodo,  updateToActive, deleteTodo } = todoSlice.actions;