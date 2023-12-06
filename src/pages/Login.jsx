import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "../context/useAuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        //로그인 성공했으므로 유저 상태 업데이트
        dispatch({ type: "LOGIN", payload: res.user }); //리듀서 업데이트
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="loginContainer">
      <h2>Login</h2>
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
        <button>log in</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
