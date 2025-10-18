import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import "./BookForm.css";

function BookForm({ onAddBook }) {
  const navigate = useNavigate();
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

    const { title, author, year, genre, description, poster } = formData;
    if (!title || !author || !year || !genre || !description || !poster) {
      alert("Harap isi semua data buku sebelum menambahkan!");
      return;
    }

    onAddBook(formData);
    alert("📚 Buku berhasil ditambahkan!");

    setFormData({
      title: "",
      author: "",
      year: "",
      genre: "",
      description: "",
      poster: "",
    });

    navigate("/home");
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

export default BookForm;
