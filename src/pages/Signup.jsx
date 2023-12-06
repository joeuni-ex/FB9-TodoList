import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); //에러

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // 처음에는 에러 x
    createUserWithEmailAndPassword(auth, email, password) //auth인증객체
      .then((res) => {
        console.log("유저가입 : ", res.user);
      })
      .catch((err) => {
        setError(err.message); //에러가 있으면 에러메세지를 state에 저장
      });
  };

  return (
    <div>
      <h2>회원가입</h2>
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
