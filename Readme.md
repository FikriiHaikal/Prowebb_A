<h1 align="center">🛒 Aplikasi CRUD Produk - E-Commerce Mini</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-blue?style=flat&logo=react" />
  <img src="https://img.shields.io/badge/Express-Backend-black?style=flat&logo=express" />
  <img src="https://img.shields.io/badge/PostgreSQL-Database-blue?style=flat&logo=postgresql" />
  <img src="https://img.shields.io/badge/Bootstrap-Styling-purple?style=flat&logo=bootstrap" />
</p>

<p align="center">
  Aplikasi web sederhana untuk manajemen produk sebagai bagian dari <strong>Ujian Tengah Semester Mata Kuliah Pemrograman Web</strong>.
</p>

---

## 👨‍🏫 Identitas Mahasiswa

- 🧑‍💻 **Nama:** Muhammad Fikri Haikal Ariadma  
- 🆔 **NIM:** 10231063  
- 📚 **Mata Kuliah:** Pemrograman Web

---

## 🎯 Tujuan Praktikum

- Mengimplementasikan fitur **CRUD** (Create, Read, Update, Delete)
- Melakukan debugging frontend dan backend
- Menyusun dokumentasi dan petunjuk penggunaan
- Menampilkan UI responsif menggunakan **Bootstrap**
- Menambahkan validasi input
- Melakukan pengujian (QA sederhana) terhadap semua fitur

---

## 🛠️ Teknologi yang Digunakan

| Bagian | Teknologi |
|--------|-----------|
| Frontend | ⚛️ React (Vite) |
| Backend | ⚙️ Express.js |
| Database | 🐘 PostgreSQL |
| Styling | 🎨 Bootstrap 5 |
| UI Library | 🧩 React-Bootstrap |

---

## 🚀 Cara Menjalankan Aplikasi

### 1️⃣ Persiapan Database PostgreSQL
Buat database bernama `ecommerce-kecil` dan jalankan query berikut:

```sql
CREATE TABLE produk (
  id SERIAL PRIMARY KEY,
  nama VARCHAR(100),
  harga INTEGER
);
```

### 2️⃣ Clone Repository & Install Dependensi
```
git clone https://github.com/FikriiHaikal/Prowebb_A.git

📁 Backend:
cd E-Commerce-Backend
npm install

📁 Frontend:
cd ecommerce-frontend
npm install
```

### 3️⃣ Jalankan Server

```bash
⚙️ Backend:
cd E-Commerce-Backend
node index.js
Pastikan konfigurasi Pool PostgreSQL sesuai:
```

### Konfigurasi Server Backend
```js
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ecommerce-kecil",
  password: "1",
  port: 5432,
});
```
```bash
⚛️ Frontend:
cd ecommerce-frontend
npm run dev
```
### 4️⃣ Akses di Browser
```
🌐 Buka aplikasi di:
http://localhost:5173
```


## 📡 Endpoint API

| Method | Endpoint      | Fungsi                        |
|--------|---------------|-------------------------------|
| GET    | `/produk`     | Mengambil semua produk        |
| POST   | `/produk`     | Menambahkan produk baru       |
| PUT    | `/produk/:id` | Mengedit produk berdasarkan ID|
| DELETE | `/produk/:id` | Menghapus produk berdasarkan ID|

## ✅ Fitur Aplikasi

| Fitur                           | Deskripsi                                                                 |
|--------------------------------|---------------------------------------------------------------------------|
| ➕ Tambah Produk                | Menambahkan produk baru melalui form modal                               |
| 📄 Tampilkan Semua Produk      | Menampilkan daftar produk dari database                                  |
| ✏️ Edit Produk                 | Mengedit produk langsung melalui modal edit                              |
| ❌ Hapus Produk                | Menghapus produk dari daftar dan database                                |
| ⚠️ Validasi Input              | Input tidak boleh kosong saat menambah atau mengedit produk              |
| ✅ Notifikasi CRUD             | Menampilkan notifikasi sukses/gagal setiap aksi CRUD                     |
| 🔄 Refresh Otomatis            | Data langsung diperbarui setelah tambah/edit/hapus tanpa reload manual   |
| 💅 Tampilan Responsif          | Desain antarmuka menarik dan mobile-friendly menggunakan Bootstrap       |
| 


## 🖼️ Screenshot Aplikasi Tampilan

| Fitur Tampilan         | Status |
|------------------------|--------|
| Check Tambah Produk    | ✅     |
| Daftar Produk          | ✅     |
| Edit Produk            | ✅     |
| Hapus Produk           | ✅     |
| Notifikasi/Validasi    | ✅     |

## 👀 Pengujian CRUD

---

### 🛒 **Create**  
Percobaan untuk menambahkan Produk Baru  
<img src="screenshot/Add.jpg" alt="Tambah Produk" width="500"/>

**🔍 Result:**  
<img src="screenshot/ResultAdd.jpg" alt="Tambah Produk" width="500"/>

---

### 📖 **Read**  
Dapat Menampilkan atau membaca isi dari database  

**🔍 Result:**  
<img src="screenshot/ResultAdd.jpg" alt="Tambah Produk" width="500"/>

---

### ✏️ **Update**  
Percobaan untuk mengedit Produk Baru  
<img src="screenshot/Update.jpg" alt="Tambah Produk" width="500"/>

**🔍 Result:**  
<img src="screenshot/ResultUpdate.jpg" alt="Tambah Produk" width="500"/>

---

### 🗑️ **Delete**  
Percobaan untuk menghapus Produk Baru  
<img src="screenshot/Delete.jpg" alt="Tambah Produk" width="500"/>

**🔍 Result:**  
<img src="screenshot/ResultDelete.jpg" alt="Tambah Produk" width="500"/>

---

## ✅ Pengujian (Quality Assurance)

Berikut hasil pengujian terhadap fitur CRUD dan validasi sistem:

| 🔧 **Fitur**   | 📌 **Status** | 📝 **Catatan**                            |
|----------------|---------------|-------------------------------------------|
| 🛒 Create       | ✅ Sukses      | Produk berhasil ditambahkan              |
| 📖 Read         | ✅ Sukses      | Data tampil dengan baik                  |
| ✏️ Update       | ✅ Sukses      | Perubahan disimpan                       |
| 🗑️ Delete       | ✅ Sukses      | Data terhapus dari list dan database     |
| ⚠️ Validasi     | ✅ Sukses      | Form tidak bisa kosong                   |
| 🧪 Konsol       | ✅ Bersih      | Tidak ada error di browser/dev console   |
| 🔁 Respons API  | ✅ 200/201     | Semua endpoint memberikan respons benar  |

---

📌 **Catatan Tambahan**:

- Validasi berhasil mencegah input kosong dan menampilkan notifikasi.
- Konsol tidak menampilkan error JS/CSS.
- API diuji menggunakan Postman dan semua endpoint mengembalikan response sesuai ekspektasi.

## ## 🖼️ Screenshot Quality Assurance Aplikasi Tampilan

---

### ✅ **Validasi 1** – Pengecekan Saat Semua Kolom Kosong  
<img src="screenshot/ValidateQA1.jpg" alt="Validasi Kosong Semua" width="500"/>

---

### ✅ **Validasi 2** – Kolom Harga Dikosongkan  
<img src="screenshot/ValidateQA2.jpg" alt="Validasi Harga Kosong" width="500"/>

---

### ✅ **Validasi 3** – Kolom Nama Produk Dikosongkan  
<img src="screenshot/ValidateQA3.jpg" alt="Validasi Nama Produk Kosong" width="500"/>

---

### ✅ **Validasi 4** – Cek Tombol Edit  
Mengecek apakah tombol edit dapat ditekan dan berfungsi dengan baik.  
<img src="screenshot/ValidateQA4.jpg" alt="Validasi Tombol Edit" width="500"/>

---

### ✅ **Validasi 5** – Cek Error Saat Input Berturut-turut  
Dilakukan penambahan data secara berurutan untuk memastikan tidak ada error saat pengiriman.  
**Hasil:** Semua berjalan normal tanpa error.  
<img src="screenshot/ValidateQA5.jpg" alt="Validasi Berturut-turut" width="500"/>

---

## 🔁 Memperbarui Repository GitHub (Push)

* Melakukan Update terhadap repository dengan menggunakan kode perintah dibawah ini:
```bash
git add .
git commit -m "Pesan perubahan"
git push
```
* Tampilan Github 
<img src="screenshot/Github.png" alt="Validasi Berturut-turut" width="500"/>
Link Repo Github https://github.com/FikriiHaikal/Prowebb_A.git

---

## 🛠️ Troubleshoot Tips Lengkap

Berikut adalah daftar kendala umum dan solusinya dari proses instalasi hingga push ke GitHub:

---

### 🧩 1. Git Belum Terinstal
- **Tanda:** `git: command not found`
- **Solusi:**  
  Unduh & install Git dari: [https://git-scm.com/downloads](https://git-scm.com/downloads)

---

### 🔧 2. Git Belum Di-Init
- **Tanda:** Tidak bisa commit, belum ada folder `.git`
- **Solusi:** Jalankan:
  ```bash
  git init
  ```

### 🧾 3. Belum Dikonfigurasi Nama & Email
Tanda: Commit gagal atau warning author unknown
```bash
Solusi:
git config --global user.name "Nama Kamu"
git config --global user.email "email@example.com"
```


### 🔗 4. Belum Menambahkan Remote
Tanda: fatal: No configured push destination
```bash
Solusi: Tambahkan remote:
git remote add origin https://github.com/username/nama-repo.git
```

### 🛑 5. Error Push: Permission denied / Token Salah
Penyebab: GitHub kini tidak menerima password biasa
```bash
Solusi:
Gunakan Personal Access Token (PAT) sebagai password
Buat token di: https://github.com/settings/tokens

Atau ubah ke SSH:
git remote set-url origin git@github.com:username/repo.git
```

### 🌀 6. Error Push: failed to push some refs
Penyebab: Ada perubahan di GitHub yang belum kamu tarik
```bash
Solusi:
git pull origin main --rebase
git push
```

### 📂 7. Gambar Tidak Muncul di Markdown
Penyebab: Path gambar salah atau folder tidak sejajar
```html
Solusi:
Pastikan gambar berada dalam folder sesuai path Markdown:
<img src="screenshot/Gambar.jpg" alt="Deskripsi" width="500"/>
```
### 🔍 8. Gagal Melihat Perubahan di GitHub
Penyebab: Lupa add atau commit
```bash
Solusi:
git add .
git commit -m "Pesan perubahan"
git push
```

---

## 🧾 Kesimpulan

Seluruh proses pengujian dan pengembangan aplikasi berjalan dengan **lancar dan berhasil**, mulai dari tahapan **instalasi**, **implementasi fitur CRUD**, **validasi form**, hingga **pengunggahan proyek ke GitHub**.

Poin-poin utama yang berhasil dicapai:

✅ Fitur **Create, Read, Update, Delete (CRUD)** berfungsi dengan baik.  
✅ Validasi form berjalan optimal dan mencegah input kosong.  
✅ Tidak ditemukan error pada **konsol browser** maupun **respons API**.  
✅ Dokumentasi dilengkapi dengan **screenshot** sebagai bukti pengujian.  
✅ Proyek berhasil di-**push ke repository GitHub** dan dapat dilihat secara online.  
✅ Troubleshoot dilakukan untuk mengatasi berbagai kendala teknis yang mungkin muncul, termasuk konfigurasi Git dan tampilan Markdown.

Dengan semua hal tersebut, aplikasi dinyatakan telah **selesai diuji secara fungsional** dan **siap untuk tahap selanjutnya**, seperti deployment atau pengujian lanjutan (QA tingkat lanjut, UI/UX testing, dll).

---
