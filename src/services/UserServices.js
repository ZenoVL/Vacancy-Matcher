import {get, child, getDatabase, ref} from "firebase/database";

export async function getUserData(userId) {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `Users/${userId}`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                return userData;
            } else {
                console.log("No data available");
                return null;
            }
        })
        .catch((error) => {
            console.error(error);
        });
}