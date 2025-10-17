import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./BookForm.css";

function BookForm({ onAddBook }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    genre: "",
    description: "",
    poster: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(formData);
    alert("Buku berhasil ditambahkan!");
    setFormData({
      title: "",
      author: "",
      year: "",
      genre: "",
      description: "",
      poster: "",
    });
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <FormInput name="title" label="Judul" value={formData.title} onChange={handleChange} />
      <FormInput name="author" label="Penulis" value={formData.author} onChange={handleChange} />
      <FormInput name="year" label="Tahun Terbit" value={formData.year} onChange={handleChange} />
      <FormInput name="genre" label="Genre" value={formData.genre} onChange={handleChange} />
      <FormInput name="poster" label="URL Poster" value={formData.poster} onChange={handleChange} />
      <FormInput name="description" label="Deskripsi" value={formData.description} onChange={handleChange} />
      <button type="submit">Tambah Buku</button>
    </form>
  );
}

export default BookForm