import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { UserContext } from "../auth/UserContext";

const Login = ({ history }) => {
  const { isAuth, setIsAuth } = useContext(UserContext);

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
  const handleUserLogin = () => {
    setValues(initialFields);
    setIsAuth(() => {
      history.push("/profile");
      return true;
    });
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
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default withRouter(Login);
