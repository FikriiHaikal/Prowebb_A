import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function ProdukList() {
  const [produk, setProduk] = useState([]);
  const [selectedProduk, setSelectedProduk] = useState(null);
  const [newNama, setNewNama] = useState("");
  const [newHarga, setNewHarga] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/produk")
      .then((response) => setProduk(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/produk/${id}`)
      .then(() => {
        setProduk(produk.filter((p) => p.id !== id));
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = (produk) => {
    setSelectedProduk(produk);
    setNewNama(produk.nama);
    setNewHarga(produk.harga);
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3001/produk/${selectedProduk.id}`, {
        nama: newNama,
        harga: newHarga,
      })
      .then((response) => {
        setProduk(
          produk.map((p) => (p.id === selectedProduk.id ? response.data.data : p))
        );
        setSelectedProduk(null);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 fw-bold">Daftar Produk</h2>
      <div className="row">
        {produk.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded-lg">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{item.nama}</h5>
                <p className="card-text text-primary fs-5">Rp{item.harga}</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEdit(item)}
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                  >
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Edit Produk */}
      {selectedProduk && (
        <div className="modal fade" id="editModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Produk</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Nama Produk</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newNama}
                    onChange={(e) => setNewNama(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Harga</label>
                  <input
                    type="number"
                    className="form-control"
                    value={newHarga}
                    onChange={(e) => setNewHarga(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button className="btn btn-success" onClick={handleUpdate} data-bs-dismiss="modal">
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProdukList;
