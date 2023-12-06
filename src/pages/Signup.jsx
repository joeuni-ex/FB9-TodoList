import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "../context/useAuthContext";

export default function Signup() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); //에러
  const { dispatch } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // 처음에는 에러 x
    createUserWithEmailAndPassword(auth, email, password) //auth인증객체
      .then((res) => {
        //가입 성공 후 자동로그인 되므로 로그인 상태 업데이트
        dispatch({ type: "LOGIN", payload: res.user }); //리듀서 업데이트
      })

      .catch((err) => {
        setError(err.message); //에러가 있으면 에러메세지를 state에 저장
      });
  };

  return (
    <div className="loginContainer">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>가입하기</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
