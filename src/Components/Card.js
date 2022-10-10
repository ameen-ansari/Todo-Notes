import { doc, deleteDoc, deleteField, updateDoc } from "firebase/firestore";
import { useEffect, useState } from 'react'
import { auth, db } from '../Firebase'
import { collection, getDocs } from "firebase/firestore";
import cardcss from "./card.module.css"

export default function Card() {
    const user = auth.currentUser
    const [users, setusers] = useState([])

    useEffect(() => {
        const getData = async () => {
            if (user) {
                let a = []
                const querySnapshot = await getDocs(collection(db, user.uid))
                querySnapshot.forEach((doc) => {
                    a.push(doc.data())
                })
                setusers(a)
            }
        }
        getData()
    })
    let btnmanager = async (e) => {
        const querySnapshot = await getDocs(collection(db, user.uid))
        querySnapshot.forEach(async (oc) => {
            await deleteDoc(doc(db, auth.currentUser.uid, oc.id))
        })
        // let ty = doc(db, auth.currentUser.uid, 'Qf8vGTzHfJYm98kRUoX4');

        // Remove the 'capital' field from the document
        // updateDoc(ty, {
        //     title: deleteField(),
        //     description: deleteField(),
        // });
        // await deleteDoc(doc(db, auth.currentUser.uid, 'Qf8vGTzHfJYm98kRUoX4'));

        // e.target.parentElement.parentElement.remove()
    }
    //Code With the Help Of Ahmad Bro 
    // const [users, setUsers] = useState([])
    // const user = auth.currentUser
    // useEffect(() => {
    //     const getData = async () => {
    //         if (user) {
    //             const userData = []
    //             const querySnapshot = await getDocs(collection(db, user.uid));
    //             querySnapshot.forEach((doc) => {
    //                 userData.push(doc.data())
    //             });
    //             setUsers(userData)
    //             console.log("userData", userData);
    //         }
    //     }
    //     getData()
    // }, [user])

    // console.log("users =>", users);
    return (
        <>
            <h1 className='text-center'>My Notes</h1>
            <div className='d-flex container flex-wrap  justify-content-center '>
                {
                    users.map((e, i) => {
                        return (
                            <div key={i} className={`${cardcss.mw} card m-2`}>
                                <div className="card-header">
                                    {i + 1}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text">{e.description}</p>
                                    <button onClick={btnmanager} className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
