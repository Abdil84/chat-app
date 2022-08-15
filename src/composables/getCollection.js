'use strict';

import { ref, watchEffect } from "vue"
import { projectFirestore } from "../Firebase/config"

const getCollection = (collection) => {
       const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

 const unsub = collectionRef.onSnapshot(snap => {
        let results = []
        snap.docs.forEach(doc => {
         doc.data().createdAt && results.push({...doc.data(), id: doc.id})
        })
        documents.value = results
        error.value = null
    }, err => {
        console.log(err.message)
        documents.value = null
        error.value = 'data not fetched'

    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return { error, documents }
}

export default getCollection

