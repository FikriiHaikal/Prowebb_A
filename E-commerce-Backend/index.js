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

  // Endpoint POST /produk (Tambah Produk)
app.post('/produk', async (req, res) => {
  try {
      const { nama, harga } = req.body;

      // Validasi input
      if (!nama || !harga) {
          return res.status(400).json({ error: 'Nama dan Harga wajib diisi' });
      }

      // Query untuk menambahkan data ke database
      const result = await pool.query(
          'INSERT INTO produk (nama, harga) VALUES ($1, $2) RETURNING *',
          [nama, harga]
      );

      res.status(201).json({ message: 'Produk berhasil ditambah', data: result.rows[0] });
  } catch (error) {
      console.error('Error menambahkan produk:', error);
      res.status(500).json({ error: 'Terjadi kesalahan saat menambahkan produk' });
  }
});


// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});