import React from "react";
import TodoContent from "./TodoContent";
import TodoHeader from "./TodoHeader";

function Todo() {
  return (
    <div className="w-full sm:max-w-4xl mt-6 ">
      <TodoHeader />
      <TodoContent />
    </div>
  );
}

export default Todo;
