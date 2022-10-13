import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { addTodo, updateTodo } from "../../app/slices/todoSlice";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const dropIn = {
  hidden: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: "scale(0.9)",
    opacity: 0,
  },
};

function Modal({ type, isOpen, setModal, todo }) {
  const titleRef = useRef();
  const statusRef = useRef();

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const status = statusRef.current.value;

    if (title.trim().length < 1) {
      toast.error("Empty title !");
      return;
    } else {
      switch (type) {
        case "add":
          dispatch(
            addTodo({
              id: uuidv4(),
              title,
              status,
              time: new Date().toLocaleString(),
            })
          );
          setModal();
          toast.success("tack added successfully");
          break;

        case "update":
          if (todo.title === title && todo.status === status) {
            toast.error("No changes, make sure you change anything");
          } else {
            dispatch(
              updateTodo({
                id: todo.id,
                title,
                status,
                time: new Date().toLocaleString(),
              })
            );
            setModal();
            toast.success("tack updated successfully");
          }
          break;
        default:
          toast.error("failed");
          break;
      }
    }
  };

  const typeRender = () => {
    if (type === "update") {
      return {
        title: "Update todo",
      };
    } else {
      return {
        title: "Add Task",
      };
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen z-10 bg-[#00000079] backdrop-blur-sm"
        >
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="m-3 p-5 w-full max-w-lg bg-gray-200 dark:bg-primary-dark rounded-xl relative shadow-lg  dark:border-2 dark:border-secondary-dark"
          >
            <motion.div
              onClick={() => setModal()}
              initial={{ top: 0, opacity: 0 }}
              animate={{ top: -50, opacity: 1 }}
              exit={{ top: 0, opacity: 0 }}
              role="button"
              className="absolute top-[-50px] right-0 bg-white dark:bg-primary-dark dark:border-2 dark:border-secondary-dark dark:hover:text-secondary-dark dark:text-white hover:bg-red-400 hover:text-white p-2 rounded-lg flex justify-center items-center"
            >
              <XMarkIcon className="h-6 w-6" />
            </motion.div>
            <form onSubmit={(e) => submitHandler(e)}>
              <h1 className=" text-gray-500 dark:text-white font-semibold text-xl mb-4">
                {typeRender().title}
              </h1>
              <div className="mb-3">
                <label
                  className="block mb-1  dark:text-white text-gray-500"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className=" w-full block px-3 py-2 rounded-md shadow-sm dark:bg-secondary-dark  dark:text-white"
                  id="title"
                  placeholder="Task Title"
                  ref={titleRef}
                  defaultValue={todo?.title}
                />
              </div>
              <div className="mb-3">
                <label
                  className="block mb-1 text-gray-500  dark:text-white "
                  htmlFor="status"
                >
                  Status
                </label>
                <select
                  className=" w-full block px-3 py-2 rounded-md shadow-sm  dark:bg-secondary-dark dark:text-white"
                  id="status"
                  ref={statusRef}
                  defaultValue={todo?.status}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="mt-10 flex space-x-3">
                <button
                  type="submit"
                  className=" bg-violet-500 px-5 py-2 rounded-lg text-white hover:bg-violet-600"
                >
                  {typeRender().title}
                </button>
                <button
                  type="button"
                  onClick={setModal}
                  className=" dark:bg-secondary-dark dark:text-white bg-gray-300 px-5 py-2 rounded-lg text-gray-600 hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
