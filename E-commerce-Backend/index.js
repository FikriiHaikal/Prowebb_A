const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Konfigurasi koneksi ke PostgreSQL
const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'ecommerce-kecil', 
  password: '1', 
  port: 5432,
});

// Endpoint GET /produk
app.get('/produk', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM produk');
      if (result.rows.length === 0) {
        // Jika data tidak ditemukan
        return res.status(404).json({ error: 'Data produk tidak ditemukan' });
      }
      res.json(result.rows); // Kirim data jika berhasil
    } catch (error) {
      console.error('Error mengambil data:', error);
      res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data' });
    }
  });

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});