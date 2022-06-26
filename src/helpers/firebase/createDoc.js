import {db, collection, addDoc } from "@/plugins/firebase";

export default function createDoc(collectionName, data){
    addDoc(collection(db, collectionName), data);
}