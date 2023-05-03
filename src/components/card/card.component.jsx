import React from 'react';
import "./card.styles.css"


export const Card = probs => {
    return (
        <div className="card">
            <img alt="user" src={`https://robohash.org/${probs.person.id}?set=set7&size=180x180`} />
            <h3>{probs.person.name}</h3>
            <p>{probs.person.email}</p>
        </div>
    )

}