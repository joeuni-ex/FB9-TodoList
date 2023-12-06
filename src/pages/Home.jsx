import { useEffect, useState } from "react";
import TodoList from "../components/TodoList.jsx";
import TodoForm from "../components/TodoForm.jsx";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config.js";
import { useAuthContext } from "../context/useAuthContext.js";

export default function Home() {
  const [todos, setTodos] = useState(null);
  const [sort, setSort] = useState("createdAt");
  const [sort2, setSort2] = useState("asc");
  //console.log(todos);
  const { user } = useAuthContext(); //유저 정보 가져옴

  useEffect(() => {
    const ref = collection(db, "todos"); //firebase config의 db임, todos가져오기

    const q = query(ref, where("uid", "==", user.uid)); // uid와  user의 uid가 동일한 것 만 가져오기
    const sortedQ = query(q, orderBy(sort, sort2));

    //todos컬렉션에 모든 문서들을 가져오기
    const unsub = onSnapshot(sortedQ, (snapshot) => {
      let results = [];
      //성공 시 .docs의 모든 문서들이 들어있음
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setTodos(results);
    });
    return () => unsub();
  }, [sort, sort2]); //한 번만 실행

  return (
    <div className="home">
      <div className="todoFormCon">
        <TodoForm />
      </div>
      {todos && (
        <TodoList
          todos={todos}
          setSort={setSort}
          sort={sort}
          setSort2={setSort2}
          sort2={sort2}
        />
      )}
    </div>
  );
}
