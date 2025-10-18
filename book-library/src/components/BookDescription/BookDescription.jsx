import React from "react";
import "./BookDescription.css";

function BookDescription({ desc, poster }) {
  return (
    <div className="book-desc">
      <img src={poster}/>
      <p>{desc}</p>
    </div>
  );
}

export default BookDescription;