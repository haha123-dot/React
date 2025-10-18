import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import BookList from "../../components/BookList/BookList";
import Navigation from "../../components/Navigation/Navigation";
import "./HomePage.css";
import Footer from "../../components/Footer/Footer";

function HomePage({ books }) {
  const [query, setQuery] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="homepage">
      <Navigation />
      <h1 className="myH1">📚 Daftar Buku</h1>
      <SearchBar onSearch={setQuery} />
      <BookList books={filteredBooks} />
      <Footer />
    </div>
  );
}

export default HomePage;