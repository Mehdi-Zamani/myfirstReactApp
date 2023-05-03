import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css"


export const CardList = probs => {
    return <div className="card-list">
        {
        probs.person.map(person => <Card key={person.id} person={person}></Card>  )
        }
      </div>
}  