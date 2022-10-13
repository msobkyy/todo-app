import React, { useState, useRef } from "react";
import Modal from "../UI/Modal";
import { useDispatch } from "react-redux";
import { updateFilterStatus } from "../../app/slices/todoSlice";

function TodoHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const filter = useRef();
  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  const filterHandler = () => {
    dispatch(updateFilterStatus(filter.current.value));
  };
  return (
    <>
      <div className="flex justify-between">
        <select
          onChange={filterHandler}
          ref={filter}
          className="px-5 py-2 bg-gray-200 dark:bg-secondary-dark dark:text-white rounded-lg border-none"
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="completed">Completed</option>
        </select>
        <button
          className=" bg-violet-500 px-5 py-2 rounded-lg text-white hover:bg-violet-600"
          onClick={modalHandler}
        >
          Add Task
        </button>
      </div>
      <Modal type="add" isOpen={isModalOpen} setModal={modalHandler} />
    </>
  );
}

export default TodoHeader;
