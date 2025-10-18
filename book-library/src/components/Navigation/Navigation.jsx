import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="myDiv">
      <h2>LitCorner</h2>
      <nav className="nav">
        <Link to="/home">🏠 Home</Link>
        <Link to="/add">➕ Tambah Buku</Link>
      </nav>
    </div>
  );
}

export default Navigation