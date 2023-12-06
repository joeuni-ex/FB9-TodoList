import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function TodoList({ todos }) {
  const handleClick = async (id) => {
    const ref = doc(db, "todos", id); //db config 추가하기
    await deleteDoc(ref);
  };

  return (
    <div className="todo-list">
      <h2 className="todo-list-text">TodoList</h2>
      {todos.map((todo) => (
        <div className="listContent" key={todo.id}>
          <div>{todo.title}</div>
          <div>
            <RiDeleteBin5Line onClick={() => handleClick(todo.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}
