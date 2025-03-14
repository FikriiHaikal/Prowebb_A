// src/App.jsx
import React from 'react';
import TambahProduk from './components/TambahProduk';
import ProdukList from './components/ProdukList'; // Opsional jika ada daftar produk
import './assets/style.css'; // Import CSS

function App() {
  return (
    <div>
      <h1>Aplikasi E-Commerce Sederhana</h1>
      <TambahProduk />
      <ProdukList /> {/* Pastikan ProdukList ada */}
    </div>
  );
}

export default App;
