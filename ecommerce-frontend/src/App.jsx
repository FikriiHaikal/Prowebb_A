// src/App.jsx
import React from "react";
import TambahProduk from "./components/TambahProduk";
import ProdukList from "./components/ProdukList";
import './assets/style.css'; // Pastikan path benar


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h1 className="fw-bold text-primary">🛒 Aplikasi E-Commerce</h1>
        <p className="text-muted">Kelola produk dengan mudah dan cepat!</p>
      </div>

      <div className="card shadow-lg p-4 mb-4">
        <TambahProduk />
      </div>

      <ProdukList />
    </div>
  );
}

export default App;
