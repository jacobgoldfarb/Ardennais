import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore"

const getUsers = async () => {
    const usersCollections = collection(db, 'users');
    (await getDocs(usersCollections)).forEach((doc) => console.log(doc.data()))
};

export { getUsers };
