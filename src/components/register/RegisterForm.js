import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";

import { db } from "../../firebase";

import Login from "../login/login";

import { UserContext } from "../auth/UserContext";

const RegisterForm = ({ history }) => {
  const { isAuth, setIsAuth } = useContext(UserContext);
  // console.log("login....");

  const initialFields = {
    username: "",
    password: "",
  };
  const [values, setValues] = useState(initialFields);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const addUser = (e) => {
    e.preventDefault();
    // db.collection("users").add({
    //   username: values.username,
    //   password: values.password,
    // });
    setValues(initialFields);
    setIsAuth(() => {
      history.push("/profile");
      return true;
    });
  };

  const handleLogout = () => setIsAuth(!isAuth);

  return (
    <>
      {isAuth ? (
        <>
          <p>Welcome, User</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <div className="signin__wrapper">
          <div>
            <h5>Register </h5>
            <form autoComplete="off" onSubmit={addUser}>
              <label htmlFor="username">User Name:</label>
              <br />
              <input
                value={values.username}
                name="username"
                onChange={handleInputChange}
                required
              />
              <br />
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="text"
                value={values.password}
                name="password"
                required
                onChange={handleInputChange}
              />
              <br />
              <br />
              <input type="submit" value="Register" />
            </form>
          </div>
          <Login />
        </div>
      )}
    </>
  );
};

export default withRouter(RegisterForm);
