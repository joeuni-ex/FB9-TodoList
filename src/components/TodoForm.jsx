import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";
import { useAuthContext } from "../context/useAuthContext";

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "todos"); //db config 추가하기
    await addDoc(ref, {
      title: newTodo, //입력할 내용을 객체형식으로 넣으면됨
      uid: user.uid,
    }); //추가할 때 까지 대기 await

    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Todo</h2>
      <label>
        <input
          required
          type="text"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button>추가</button>
      </label>
    </form>
  );
}
