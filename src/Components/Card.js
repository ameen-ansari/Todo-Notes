import React from 'react'
import card from './card.module.css'

export default function Card() {
    return (
        <div className={`container d-flex flex-wrap ${card.cardp}`}>
            <div className={`card m-2 ${card.card1}`}>
                <h5 className="card-header">Featured</h5>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="/" className="btn btn-primary">Delete</a>
                </div>
            </div>
        </div>
    )
}
