import React, { useContext } from "react";

import { UserContext } from "../auth/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      Hello, {user.username} <br />
      Good to see you, Stay safe!
    </div>
  );
};

export default Profile;
