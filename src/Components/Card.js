import { doc, deleteDoc } from "firebase/firestore";
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
    let btnmanager = async (j) => {
        let re = document.getElementById('rapet').childNodes
        const querySnapshot = await getDocs(collection(db, user.uid))
        let earr = []
        querySnapshot.forEach(async (oc) => {
            earr.push(oc.id)
        })
        Array.from(re).forEach((e, i) => {
            e.setAttribute("id", earr[i])
        })
        let userCall = j.target.parentElement.parentElement.getAttribute("id")
        await deleteDoc(doc(db, auth.currentUser.uid, userCall));
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
            <h1 className={`mt-4 text-center ${cardcss.rapper}`}>My Notes</h1>
            <div id="rapet" className={`${cardcss.rapper} d-flex container flex-wrap  justify-content-center `}>
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
