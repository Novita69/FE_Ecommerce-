import React from "react";
import "./AppCRUD.css";
import { Button, Row, Col, Input, FormGroup, Label, Form } from "reactstrap";
import List from "../../components/List";
import { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import axios from "axios";

let api = axios.create({ baseURL: "http://localhost:3000" });

function AppCRUD() {
  const [database, setContacts] = useState([]);

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    // fetch data dsini dan set data

    api.get("/database").then((res) => {
      setContacts(res.data);
    });
  }, []);

  function handleChange(e) {
    let newFormState = { ...formData };
    newFormState[e.target.name] = e.target.value;
    setFormData(newFormState);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let data = [...database];

    if (formData.name === "") {
      return false;
    }
    if (formData.quantity === "") {
      return false;
    }
    if (formData.price === "") {
      return false;
    }

    if (isUpdate.status) {
      data.forEach((database) => {
        if (database.id === isUpdate.id) {
          database.name = formData.name;
          database.quantity = formData.quantity;
          database.price = formData.price;
        }
      });
      api
        .put("/database/" + isUpdate.id, {
          id: isUpdate.id,
          name: formData.name,
          quantity: formData.quantity,
          price: formData.price,
        })
        .then(() => {
          alert("Data berhasil di update");
        });
      // update berdasarkan id
    } else {
      let toSave = {
        id: uuidv1(),
        name: formData.name,
        quantity: formData.quantity,
        price: formData.price,
      };
      data.push(toSave);

      // menambahkan data
      api.post("/database", toSave).then(() => {
        alert("Data berhasil ditambah");
      });
    }
    setContacts(data);
    setIsUpdate(false);
    setFormData({ name: "", quantity: "", price: "" });
  }

  function handleEdit(id) {
    // cari data di state
    // isi data ke state form
    let data = [...database];
    let foundData = data.find((database) => database.id === id);
    setIsUpdate({ status: true, id: id });
    setFormData({
      name: foundData.name,
      quantity: foundData.quantity,
      price: foundData.price,
    });
  }

  function handleDelete(id) {
    let data = [...database];
    let filteredData = data.filter((database) => database.id !== id);

    // menghapus data
    api.delete("/database/" + id).then(() => alert("Data berhasil dihapus"));
    setContacts(filteredData);
  }

  return (
    <div className="App">
      <div className="fixed-top bg-white pb-3 mx-auto" style={{ width: 400 }}>
        <h1 className="px-3 py-3 font-weight-bold">Form Add Product</h1>
        <form onSubmit={handleSubmit} className="px-3 py-4">
          <div className="form-group mt-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              value={formData.name}
              name="name"
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="">Quantity</label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.quantity}
              className="form-control"
              name="quantity"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="">Price</label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.price}
              className="form-control"
              name="price"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Save
            </button>
          </div>
        </form>
      </div>

      {/* <>
        <Row>
          <Form>
            <>
              <FormGroup>
                <Label>Nama :</Label>
                <Input type={"text"} placeholder={"nama"} required />
              </FormGroup>
            </>
          </Form>
          <Form>
            <>
              <FormGroup>
                <Label>Quantity : </Label>
                <Input type={"text"} placeholder={"nama"} required />
              </FormGroup>
            </>
            <>
              <FormGroup>
                <Label>Price : </Label>
                <Input type={"text"} placeholder={"nama"} required />
              </FormGroup>
            </>
          </Form>
        </Row>
      </> */}

      <div style={{ marginTop: 200 }}>
        <List
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          data={database}
        />
      </div>
    </div>
  );
}

export default AppCRUD;
