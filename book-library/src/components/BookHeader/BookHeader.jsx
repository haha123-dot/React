import React from "react";
import "./BookHeader.css";

function BookHeader({ title, author }) {
  return (
    <header className="book-header">
      <h2>{title}</h2>
      <h4>{author}</h4>
    </header>
  );
}

export default BookHeader;