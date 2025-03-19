const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Konfigurasi koneksi ke PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ecommerce-kecil",
  password: "1",
  port: 5432,
});

// Endpoint GET /produk (Ambil semua produk)
app.get("/produk", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM produk");
    res.json(result.rows);
  } catch (error) {
    console.error("Error mengambil data:", error);
    res.status(500).json({ error: "Terjadi kesalahan saat mengambil data" });
  }
});

// Endpoint POST /produk (Tambah Produk)
app.post("/produk", async (req, res) => {
  try {
    const { nama, harga } = req.body;

    // Validasi input
    if (!nama || !harga) {
      return res.status(400).json({ error: "Nama dan Harga wajib diisi" });
    }

    // Query untuk menambahkan data ke database
    const result = await pool.query(
      "INSERT INTO produk (nama, harga) VALUES ($1, $2) RETURNING *",
      [nama, harga]
    );

    res.status(201).json({ message: "Produk berhasil ditambah", data: result.rows[0] });
  } catch (error) {
    console.error("Error menambahkan produk:", error);
    res.status(500).json({ error: "Terjadi kesalahan saat menambahkan produk" });
  }
});

// Endpoint PUT /produk/:id (Update Produk)
app.put("/produk/:id", async (req, res) => {
  const { id } = req.params;
  const { nama, harga } = req.body;

  try {
    const updateProduk = await pool.query(
      "UPDATE produk SET nama = $1, harga = $2 WHERE id = $3 RETURNING *",
      [nama, harga, id]
    );

    if (updateProduk.rowCount === 0) {
      return res.status(404).json({ error: "Produk tidak ditemukan" });
    }

    res.json({ message: "Produk berhasil diperbarui", data: updateProduk.rows[0] });
  } catch (err) {
    console.error("Error saat memperbarui produk:", err);
    res.status(500).json({ error: "Terjadi kesalahan saat memperbarui produk" });
  }
});

// Endpoint DELETE /produk/:id (Hapus Produk)
app.delete("/produk/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduk = await pool.query("DELETE FROM produk WHERE id = $1", [id]);

    if (deleteProduk.rowCount === 0) {
      return res.status(404).json({ error: "Produk tidak ditemukan" });
    }

    res.json({ message: "Produk berhasil dihapus" });
  } catch (err) {
    console.error("Error saat menghapus produk:", err);
    res.status(500).json({ error: "Terjadi kesalahan saat menghapus produk" });
  }
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
