import { collection, getDocs, setDoc, doc, getDoc, deleteDoc, updateDoc, increment } from "firebase/firestore";
import db from "../../config/firebase";

export const getLibrary = async () => {
    // get the collection reference
    const collectionRef = collection(db, "library");
    // get query snapshot of all documents in the db;

    const querySnapshot = await getDocs(collectionRef);
    // clean the data so it's easier to use in react
    const cleanedData = querySnapshot.docs.map((rawDocument) => {
        const id = rawDocument.id;
        const restOfData = rawDocument.data();
        return { id, ...restOfData };
    });

    return cleanedData;
};

export const addBook = async (bookData) => {
    console.log(bookData);
    const id = bookData.id;
    //take in some data from React
    const { title, authors, imageLinks, averageRating } = bookData;
    //clean that Data
    const newBook = { id: id, title: title, authors: authors, imageLinks: imageLinks, averageRating: averageRating };
    //use that collection reference to add cleaned data to firebase
    const newDoc = await setDoc(doc(db, "library", id), newBook);
    return newDoc;
};

export const deleteBookById = async (id) => {
    const docRef = doc(db, "library", id);
    await deleteDoc(docRef);
    //To do: throw error if delete doesn`t happen
    return true;
};
