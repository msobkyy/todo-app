import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../app/slices/todoSlice";
import toast from "react-hot-toast";
import CheckBox from "../UI/CheckBox";
import { motion } from "framer-motion";

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TodoItem({ todo, updateId }) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Delete completed!");
  };
  const updateHandler = () => {
    updateId(todo);
  };
  const checkHandler = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        title: todo.title,
        status: todo.status === "completed" ? "incomplete" : "completed",
      })
    );
  };
  return (
    <motion.div
      variants={child}
      className=" bg-slate-100 text-gray-800 p-4 rounded-xl flex justify-between items-center shadow-md"
    >
        <div className="flex justify-center items-center">
          <CheckBox
            checked={todo?.status === "completed"}
            checkHandler={checkHandler}
          />
          <div>
            <p
              className={`${
                todo.status === "completed" ? "line-through text-gray-400" : ""
              } text-gray-600 text-lg`}
            >
              {todo.title}
            </p>
            <p className=" text-sm text-gray-400">{todo.time}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <div
            role="button"
            onClick={deleteHandler}
            className="bg-gray-200 w-8 h-8 rounded-md flex justify-center items-center shadow-sm"
          >
            <FaTrashAlt size="20" className="text-red-400" />
          </div>
          <div
            role="button"
            onClick={updateHandler}
            className="bg-gray-200 w-8 h-8 rounded-md flex justify-center items-center shadow-sm  "
          >
            <FaEdit size="20" className="text-gray-500" />
          </div>
        </div>
    </motion.div>
  );
}

export default TodoItem;
