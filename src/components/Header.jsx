import React from "react";
import { FaMoon, FaLightbulb } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { updateTheme } from "../app/slices/todoSlice";

function Header() {
  const theme = useSelector((state) => state.todo.theme);
  const dispatch = useDispatch();

  const darkHandler = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      dispatch(updateTheme("light"));
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      dispatch(updateTheme("dark"));
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <div className="flex justify-center items-center sticky top-0 font-bold text-4xl bg-violet-500 p-4 text-gray-100 ">
      <h1>TODO LIST</h1>
      <button
        type="button"
        onClick={darkHandler}
        className="flex justify-center items-center rounded-full bg-white text-primary-dark hover:scale-110 p-1 w-12 h-12 absolute right-4 dark:bg-primary-dark dark:text-gray-200 translate duration-150 border-2 border-primary-dark dark:border-white shadow-xl"
      >
        {theme === "dark" ? <FaLightbulb size={23} /> : <FaMoon size={23} />}
      </button>
    </div>
  );
}

export default Header;
