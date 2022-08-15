'use strict';

import { projectAuth} from "../Firebase/config"
import { ref } from "vue"

const error = ref(null);

const signin = async (email, password) => {
    error.value = null

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password);
        error.value = null;
        return res;
    } 
    catch (err) {
        console.log(err.message);
        error.value = ' Incorrect Signin credentials ';
    }
}


const useSignin = () => {
    return { error, signin };
}

export default useSignin