// src/components/ProdukList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProdukList() {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/produk')
      .then((response) => {
        setProduk(response.data); // Simpan data jika berhasil
      })
      .catch((error) => {
        if (error.response) {
          // Error dari backend (misalnya, status 404 atau 500)
          console.error('Error dari backend:', error.response.data);
          alert(`Error: ${error.response.data.error}`);
        } else if (error.request) {
          // Tidak ada respons dari backend (network error)
          console.error('Tidak ada respons dari backend:', error.request);
          alert('Tidak bisa terhubung ke server. Cek koneksi internet Anda.');
        } else {
          // Error lainnya
          console.error('Error:', error.message);
          alert('Terjadi kesalahan saat mengambil data.');
        }
      });
  }, []);

  return (
    <div>
      <h2>Daftar Produk (From Database)</h2>
      <ul>
        {produk.map((item) => (
          <li key={item.id}>
            {item.nama} - Rp{item.harga}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProdukList;