import React from "react";
import "./card.styles.css";
import LazyImage from "../LazyImage/LazyImage";

export const Card = (probs) => {
  return (
    <div className="card">
      <LazyImage
        alt="user"
        src={`https://robohash.org/${probs.person.id}?set=set7&size=180x180`}
      />
      <h3>{probs.person.name}</h3>
      <p>{probs.person.email}</p>
    </div>
  );
};
