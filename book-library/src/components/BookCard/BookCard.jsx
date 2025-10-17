import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.poster} alt={book.title} className="book-poster" />

      <div className="book-content">
        <h3>{book.title}</h3>
        <p>{book.publisher}</p>
        <small>{book.genre} • {book.year}</small>
      </div>

      <Link to={`/book/${book.id}`} className="detail-btn">
        Lihat Detail
      </Link>
    </div>
  );
}

export default BookCard;
