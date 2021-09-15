import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore"

const getPosts = async () => {
    const postsCollections = collection(db, 'posts');
    const docs = await getDocs(postsCollections)
    var resp = []
    docs.forEach((doc) => resp.push(doc.data()))
    return resp
};

const createPost = async (newPost) => {
    await addDoc(collection(db, "posts"), newPost);
};

export { getPosts, createPost };
