import { collection, onSnapshot , db, query } from "@/plugins/firebase";
import store from '@/store/index'

export default async function getDocsRealTime(collectionName, moduleName, stateName) {
    await store;

        let fetchedCollection = collection(db, collectionName);
        let q = query(fetchedCollection)
        await onSnapshot(q, (querySnapshot) => {
            let data = []
            querySnapshot.forEach(doc => {
                data.push({...doc.data(), id: doc.id})
            })

            store.state[moduleName][stateName] = data
        });
}