import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import card from './card.module.css'
import { auth, db } from '../Firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function Card(props) {
    const [myu, setmyu] = useState("")
    useEffect(onAuthStateChanged(auth, async (user) => {
        setmyu(user.uid)
        if (user.uid) {
            const querySnapshot = await getDocs(collection(db, myu));
            querySnapshot.forEach((doc) => {
                let ww = doc.data()
                let cardp = document.getElementById('cardp')
                console.log(cardp);
                cardp.innerHTML += `<p>${ww.title}</p>`
                cardp.innerHTML += `<p>${ww.description}</p>`
                console.log(ww);
            });
        }
    }), [myu])
    // doc.data() is never undefined for query doc snapshots

    return (
        <div id='cardp' className={`container d-flex flex-wrap ${card.cardp}`}>
            <div className={`card m-2 ${card.card1}`}>
                <h5 className="card-header">        </h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="/" className="btn btn-primary">Delete</a>
                </div>
            </div>
        </div>
    )
}
