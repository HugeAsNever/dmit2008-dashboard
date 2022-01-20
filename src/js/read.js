 /*
    import data
    send data to render function
    RenderFunctiion(template, data) =====> component markup with data
    1. creating a template
    2. setup a page init function async fetch the RTD data
    3. Loading the data read update delete share same data...
 */
import {ref,get} from 'firebase/database';
import { db } from "./libs/firebase/firebaseConfig";
import { renderUser } from "./templates/user";


let store = [];
async function pageInit(){
    const userRef = ref(db,'users/');
    const userSnapShot = await get(userRef);
    const userData = {...userSnapShot.val()};
    const users = Object.keys(userData).map(user=>{
        return userData[user]
    })
    console.log(users);

    /*
        object  two ways to get property from a object
            obj.prop
            obj['prop']
    */

}

pageInit();
