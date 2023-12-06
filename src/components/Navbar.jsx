import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { useAuthContext } from "../context/useAuthContext";

export default function Navbar() {
  const { dispatch, user } = useAuthContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <nav>
      <h1>My Todo List</h1>
      <p></p>
      <ul>
        {user && (
          <>
            <li> {user.email} 님</li>
          </>
        )}
        <li>
          <Link to="/">Home</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li onClick={logout}>Logout</li>
          </>
        )}
      </ul>
    </nav>
  );
}
