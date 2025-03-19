import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Form, Alert } from "react-bootstrap";

function TambahProduk() {
  const [show, setShow] = useState(false);
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !harga) {
      setError("Nama dan Harga wajib diisi!");
      return;
    }
    setError("");

    axios
      .post("http://localhost:3001/produk", { nama, harga })
      .then((res) => {
        console.log("Produk berhasil ditambah:", res.data);
        setNama("");
        setHarga("");
        setShow(false);
      })
      .catch((err) => console.error("Error menambah produk:", err));
  };

  return (
    <>
      <div className="text-center mb-3">
        <Button variant="success" onClick={() => setShow(true)}>
          + Tambah Produk
        </Button>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nama Produk</Form.Label>
              <Form.Control
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Harga Produk</Form.Label>
              <Form.Control
                type="number"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
            </Form.Group>
            <div className="text-end">
              <Button variant="secondary" onClick={() => setShow(false)}>
                Batal
              </Button>
              <Button variant="primary" type="submit" className="ms-2">
                Simpan
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TambahProduk;
