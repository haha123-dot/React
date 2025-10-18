import React from "react";
import BookForm from "../../components/BookForm/BookForm";
import Navigation from "../../components/Navigation/Navigation";
import "./AddBookPage.css";
import Footer from "../../components/Footer/Footer";

function AddBookPage({ onAddBook }) {
  return (
    <div className="add-book-page">
      <Navigation />
      <h2 style={{fontSize: "40px"}}>Tambah Buku Baru</h2>
      <BookForm onAddBook={onAddBook} />
      <Footer />
    </div>
  );
}

export default AddBookPage;