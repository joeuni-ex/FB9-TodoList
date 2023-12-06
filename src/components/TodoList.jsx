import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi2";
import { useState } from "react";

export default function TodoList({ todos }) {
  const [modifyId, setModifyId] = useState(null);
  const [modify, setModify] = useState("");

  //삭제
  const handleClickDelete = async (id) => {
    const ref = doc(db, "todos", id); //db config 추가하기
    await deleteDoc(ref);
  };

  //수정
  const handleClickModify = (id) => {
    setModifyId(id);
    const selectedTodo = todos.find((todo) => todo.id === id);
    setModify(selectedTodo.title);
  };

  const handleModifyResult = async (id) => {
    const ref = doc(db, "todos", id); //db config 추가하기
    await updateDoc(ref, {
      title: modify,
    });
    setModifyId(null);
  };

  const modifyTitle = (e) => {
    setModify(e.target.value);
  };

  return (
    <div className="todo-list">
      <h2 className="todo-list-text">TodoList</h2>
      {todos.map((todo) => (
        <div className="listContent" key={todo.id}>
          {modifyId === todo.id ? (
            <form className="todo-list-form">
              <input value={modify} onChange={modifyTitle} />
              <div className="todo-list-icon">
                <HiDocumentText onClick={() => handleModifyResult(todo.id)} />
              </div>
            </form>
          ) : (
            <>
              <div>{todo.title}</div>
              <div>
                <HiDocumentText
                  onClick={() => handleClickModify(todo.id)}
                  className="icon"
                />
                <RiDeleteBin5Line
                  onClick={() => handleClickDelete(todo.id)}
                  className="icon"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
