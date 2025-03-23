import React from "react";
import { MdDelete, MdOutlineDone } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { Todo } from "../../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <MdDelete />
        </span>
        <span className="icon">
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
