import React from "react";
import BookCard from "../BookCard/BookCard";
import "./BookList.css";

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>Tidak ada buku ditemukan.</p>
      ) : (
        books.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
}

export default BookList;