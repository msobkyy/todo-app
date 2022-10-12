import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import TodoItem from "./TodoItem";
import { RiEmotionHappyLine } from "react-icons/ri";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TodoContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todo, setTodo] = useState([]);

  const todolist = useSelector((state) => state.todo.todolist);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const sortedTodolist = [...todolist]
    .sort((a, b) => new Date(b.time) - new Date(a.time))
    .filter((todo) => {
      if (filterStatus === "all") {
        return true;
      }
      return todo.status === filterStatus;
    });

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const updateHandler = (todo) => {
    setTodo(todo);
    modalHandler();
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="p-4 rounded-lg mt-6 bg-gray-200 space-y-4"
      >
        {sortedTodolist && sortedTodolist.length > 0 ? (
          sortedTodolist.map((todo) => (
            <TodoItem key={todo.id} todo={todo} updateId={updateHandler} />
          ))
        ) : (
          <motion.div
            variants={child}
            className="h-40 whitespace-nowrap bg-slate-100 text-gray-800 p-4 rounded-xl flex justify-center items-center shadow-md text-md sm:text-  xl"
          >
            No Todos <RiEmotionHappyLine className="mx-2" /> add task to view
            here{" "}
          </motion.div>
        )}
      </motion.div>
      <Modal
        type="update"
        isOpen={isModalOpen}
        setModal={modalHandler}
        todo={todo}
      />
    </>
  );
}

export default TodoContent;
