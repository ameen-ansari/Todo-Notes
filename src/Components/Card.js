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
            <h1 className='text-center m-4'>My Notes</h1>
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
                                    <a href='/' className="btn btn-primary">Delete</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
