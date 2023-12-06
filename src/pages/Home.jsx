import { useEffect, useState } from "react";
import TodoList from "../components/TodoList.jsx";
import TodoForm from "../components/TodoForm.jsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config.js";

export default function Home() {
  const [todos, setTodos] = useState(null);
  //console.log(todos);

  useEffect(() => {
    const ref = collection(db, "todos"); //firebase config의 db임, todos가져오기

    //todos컬렉션에 모든 문서들을 가져오기
    getDocs(ref).then((snapshot) => {
      let results = [];
      //성공 시 .docs의 모든 문서들이 들어있음
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setTodos(results);
    });
  }, []); //한 번만 실행

  return (
    <div className="App">
      {todos && <TodoList todos={todos} />}
      <TodoForm />
    </div>
  );
}
