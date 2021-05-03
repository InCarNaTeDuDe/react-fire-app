import "./App.css";
import React, { useState, useMemo, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProtectedRoute from "./components/auth";
import { UserContext } from "./components/auth/UserContext";

const RegisterForm = lazy(() => import("./components/register/RegisterForm"));
const About = lazy(() => import("./components/about"));
const Profile = lazy(() => import("./components/profile/profile"));

function App() {
  const [user, setUser] = useState({
    isLoggedIn: false,
  });
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">{user.isLoggedIn ? "Home" : "Register"}</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />

      <Suspense fallback={<p>Loading...</p>}>
        <UserContext.Provider value={value}>
          <Route exact path="/" component={RegisterForm} />
          <ProtectedRoute path="/about" component={About} />
          <ProtectedRoute path="/profile" component={Profile} />
        </UserContext.Provider>
      </Suspense>
    </Router>
  );
}

export default App;
