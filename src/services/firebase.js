import { firebase, FieldValue } from "../lib/firebase";

//function to determine if the user already exists or not ->
//returns an array of [true or false], based on that we can provide an error state
export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}

//function to get the user object by comparing the userId in the object and the payload userId!
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({ ...item.data(), docId: item.id }));

  return user;
}
