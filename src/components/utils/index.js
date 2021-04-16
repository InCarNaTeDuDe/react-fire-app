import { db } from "../../firebase";

export const isExistingUser = async (userObj) => {
  const querySnapshot = await db
    .collection("users")
    .where("username", "==", userObj.username)
    .get();

  return querySnapshot.forEach(function (doc) {
    if (doc.exists) {
      alert(`UserName exists!,Try with a different one`);
    } else {
      const { id } = db.collection("users").add(userObj);
      alert("id is:--" + id);
    }
  });
};

export const addUserToDB = async (userObj) => {
//   console.log(userObj);
  const canAdd = await isExistingUser(userObj);
  alert("can add?" + canAdd);
};
