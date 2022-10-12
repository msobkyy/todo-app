import { createSlice } from "@reduxjs/toolkit";

const getInitialTodos = () => {
  const localTodos = window.localStorage.getItem("todolist");
  if (localTodos) {
    return JSON.parse(localTodos);
  }
  window.localStorage.setItem("todolist", JSON.stringify([]));
  return [];
};

const initialValue = {
  filterStatus: "all",
  todolist: getInitialTodos(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todolist.push(action.payload);
      const todolist = window.localStorage.getItem("todolist");
      if (todolist) {
        const todoListArr = JSON.parse(todolist);
        todoListArr.push({ ...action.payload });
        window.localStorage.setItem("todolist", JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          "todolist",
          JSON.stringify({ ...action.payload })
        );
      }
    },
    deleteTodo: (state, action) => {
      const todolist = window.localStorage.getItem("todolist");
      if (todolist) {
        const todoListArr = JSON.parse(todolist).filter(
          (todo) => todo.id !== action.payload
        );
        window.localStorage.setItem("todolist", JSON.stringify(todoListArr));
        state.todolist = todoListArr;
      } else {
        window.localStorage.setItem(
          "todolist",
          JSON.stringify({ ...action.payload })
        );
      }
    },
    updateTodo: (state, action) => {
      const todolist = window.localStorage.getItem("todolist");
      if (todolist) {
        const todoListArr = JSON.parse(todolist);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.status = action.payload.status;
          }
        });
        window.localStorage.setItem("todolist", JSON.stringify(todoListArr));
        state.todolist = todoListArr;
      } else {
        window.localStorage.setItem(
          "todolist",
          JSON.stringify({ ...action.payload })
        );
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, updateFilterStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
