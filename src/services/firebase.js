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

//gets the suggested profiles to follow for the user, basically goes through the followers of user and doesn't
//show the user to follow the already followed id but shows the ids which aren't being followed
export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection("users").limit(10).get();

  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId)
    );
}
