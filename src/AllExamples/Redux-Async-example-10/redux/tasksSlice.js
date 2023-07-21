import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress: {
      reducer(state) {
        state.isLoading = true;
      },
    },
    fetchingSuccess: {
      reducer(state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      },
      fetchingError: {
        reducer(state, action) {
          state.isLoading = false;
          state.error = action.payload;
        },
      },
    },
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },
    deleteTask: {
      reducer(state, action) {
        const index = state.findIndex(task => task.id === action.payload);
        state.splice(index, 1);
      },
    },
    toggleCompleted: {
      reducer(state, action) {
        for (const task of state) {
          if (task.id === action.payload) {
            task.completed = !task.completed;
            break;
          }
        }
      },
    },
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addTask,
  deleteTask,
  toggleCompleted,
} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
