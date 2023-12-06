import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import { useAuthContext } from "./context/useAuthContext.js";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/signup" element={!user ? <Signup /> : <Home />} />
          <Route path="/login" element={!user ? <Login /> : <Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
