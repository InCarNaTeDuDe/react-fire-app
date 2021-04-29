import "./App.css";
import React, { useState, useMemo, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProtectedRoute from "./components/auth";
import { UserContext } from "./components/auth/UserContext";

const RegisterForm = lazy(() => import("./components/register/RegisterForm"));
const About = lazy(() => import("./components/about"));
const Profile = lazy(() => import("./components/profile/profile"));

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
