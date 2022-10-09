import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth, db } from '../Firebase'
import card from './card.module.css'
import { collection, doc, setDoc, getDocs } from "firebase/firestore";

export default function Card() {
    const [users, setUsers] = useState([])
    const user = auth.currentUser
    useEffect(() => {
        const getData = async () => {
            if (user) {
                const userData = []
                const querySnapshot = await getDocs(collection(db, user.uid));
                querySnapshot.forEach((doc) => {
                    userData.push(doc.data())
                });
                setUsers(userData)
                console.log("userData", userData);
            }
        }
        getData()
    }, [user])

    console.log("users =>", users);
    // console.log("users",);
    return (
        <div>
            {
                users.map((e, i) => {
                    return (
                        <div>{e.title}</div>
                    )
                })
            }
        </div>
    )
}
