import React from "react";
import TodoContent from "./TodoContent";
import TodoHeader from "./TodoHeader";

function Todo() {
  return (
    <div className="w-full sm:max-w-4xl ">
      <TodoHeader />
      <TodoContent />
    </div>
  );
}

export default Todo;
