import "./App.css";
import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RegisterForm from "./components/register/RegisterForm";
import ProtectedRoute from "./components/auth";
import Profile from "./components/profile/profile";
import { UserContext } from "./components/auth/UserContext";

const About = () => {
  return <div>Hello from ABout Us Page</div>;
};

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const value = useMemo(() => ({ isAuth, setIsAuth }), [isAuth, setIsAuth]);

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">{isAuth ? "Home" : "Register"}</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />

      <UserContext.Provider value={value}>
        <Route exact path="/" component={RegisterForm} />
        <ProtectedRoute path="/about" component={About} />
        <ProtectedRoute path="/profile" component={Profile} />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
