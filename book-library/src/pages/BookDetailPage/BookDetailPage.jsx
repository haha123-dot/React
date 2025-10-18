import React from "react";
import { useParams, Link } from "react-router-dom";
import BookHeader from "../../components/BookHeader/BookHeader";
import BookInfo from "../../components/BookInfo/BookInfo";
import BookDescription from "../../components/BookDescription/BookDescription";
import Navigation from "../../components/Navigation/Navigation";
import "./BookDetailPage.css";
import Footer from "../../components/Footer/Footer";

function BookDetailPage({ books }) {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Buku tidak ditemukan.</p>;

  return (
    <div className="container">
      <Navigation />
      <Link to="/home" className="back-btn">← Kembali</Link>
      <div className="book-detail">
        <div className="book-layout">
          <img src={book.poster} alt={book.title} className="book-image" />

          <div className="book-text">
            <BookHeader title={book.title} author={book.author} />
            <BookInfo year={book.year} genre={book.genre} />
            <BookDescription desc={book.description} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookDetailPage