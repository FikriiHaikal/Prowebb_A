import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  Form,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

function ProdukList() {
  const [produk, setProduk] = useState([]);
  const [show, setShow] = useState(false);
  const [editProduk, setEditProduk] = useState({ id: "", nama: "", harga: "" });

  useEffect(() => {
    fetchProduk();
  }, []);

  const fetchProduk = async () => {
    try {
      const response = await axios.get("http://localhost:3001/produk");
      setProduk(response.data);
    } catch (error) {
      console.error("Error fetching produk:", error);
    }
  };

  const handleEdit = (item) => {
    setEditProduk(item);
    setShow(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus produk ini?")) {
      try {
        await axios.delete(`http://localhost:3001/produk/${id}`);
        fetchProduk();
      } catch (error) {
        console.error("Error deleting produk:", error);
      }
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3001/produk/${editProduk.id}`,
        editProduk
      );
      setShow(false);
      fetchProduk();
    } catch (error) {
      console.error("Error updating produk:", error);
    }
  };

  return (
    <Container>
      <h2 className="text-center mb-4">🛒 Daftar Produk</h2>
      <Row>
        {produk.map((item) => (
          <Col md={4} sm={6} xs={12} key={item.id} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Img
                variant="top"
                src={`https://source.unsplash.com/300x200/?product,${item.nama}`}
                alt={item.nama}
              />
              <Card.Body className="text-center">
                <Card.Title>{item.nama}</Card.Title>
                <Card.Text className="text-muted">Rp {item.harga}</Card.Text>
                <div className="d-flex flex-column gap-2">
                  <Button
                    className="text-dark"
                    variant="warning"
                    onClick={() => handleEdit(item)}
                  >
                    <BsPencilSquare className="me-1" /> Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    <BsTrash className="me-1" /> Hapus
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal Edit Produk */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nama Produk</Form.Label>
              <Form.Control
                type="text"
                value={editProduk.nama}
                onChange={(e) =>
                  setEditProduk({ ...editProduk, nama: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                value={editProduk.harga}
                onChange={(e) =>
                  setEditProduk({ ...editProduk, harga: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Batal
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Simpan Perubahan
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProdukList;
