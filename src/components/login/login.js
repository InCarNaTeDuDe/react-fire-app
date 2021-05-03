import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";

import { db } from "../../firebase";

import { UserContext } from "../auth/UserContext";

const Login = ({ history }) => {
  const { setUser } = useContext(UserContext);

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
  const handleUserLogin = async (e) => {
    e.preventDefault();

    try {
      const querySnapshot = await db
        .collection("users")
        .where("username", "==", values.username)
        .where("password", "==", values.password)
        .get();

      const existingUser = querySnapshot.empty; // Will be false or existing user

      if (!existingUser) {
        querySnapshot.forEach(function (doc) {
          if (doc.exists) {
            setValues(initialFields);
            setUser({ isLoggedIn: true, ...doc.data() });
          }
        });

        history.push("/profile");
      } else {
        alert("User Not found");
        setValues(initialFields);
      }
    } catch (error) {
      console.error("ERR on Login:-", error);
    }
  };
  return (
    <div>
      <h5>Login </h5>
      <form autoComplete="off" onSubmit={handleUserLogin}>
        <label htmlFor="username">User Name:</label>
        <br />
        <input
          value={values.username}
          name="username"
          onChange={handleInputChange}
          placeholder="Enter Username"
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="text"
          value={values.password}
          name="password"
          placeholder="Enter Password"
          required
          onChange={handleInputChange}
        />
        <br />
        <br />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default withRouter(Login);
