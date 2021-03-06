import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";

import { db } from "../../firebase";

import Login from "../login/login";
import { UserContext } from "../auth/UserContext";

const RegisterForm = ({ history }) => {
  const { user, setUser } = useContext(UserContext);

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

  const addUser = async (e) => {
    e.preventDefault();

    const querySnapshot = await db
      .collection("users")
      .where("username", "==", values.username)
      .get();

    const isNewUser = querySnapshot.empty; // empty will be true, if no record exists in DB

    if (isNewUser) {
      addUserToDB({
        username: values.username,
        password: values.password,
      });
    } else {
      alert("Seems to be an exising user, Please Login!");
      setValues(initialFields);
    }
  };

  async function addUserToDB(userObj) {
    try {
      const { id } = await db.collection("users").add(userObj);
      // Use the Users Id Generated by Firebase in Context, To use it accross all the components

      const querySnapshot = await db
        .collection("users")
        .where("username", "==", values.username)
        .where("password", "==", values.password)
        .get();

      querySnapshot.forEach(function (doc) {
        setValues(initialFields);
        setUser({ isLoggedIn: true, id, ...doc.data() });
      });

      history.push("/profile");
    } catch (error) {
      console.error("ERR on Register: ", error);
    }
  }

  const handleLogout = () => setUser({ isLoggedIn: false });

  return (
    <>
      {user.isLoggedIn ? (
        <>
          <p>Welcome, {user.username}</p>
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
                required
                placeholder="Enter Password"
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
