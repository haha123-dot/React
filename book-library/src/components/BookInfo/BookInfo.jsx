import React from "react";
import "./BookInfo.css";

function BookInfo({ year, genre }) {
  return (
    <div className="book-info">
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Tahun:</strong> {year}</p>
    </div>
  );
}


export default BookInfo;