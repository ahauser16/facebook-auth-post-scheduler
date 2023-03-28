//To read or write data from the database, you need an instance of firebase.database.reference:
//  const db = getDatabase();


import { getDatabase, ref, set } from "firebase/database";

export function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

//NB -->Using set() overwrites data at the specified location, including any child nodes.

