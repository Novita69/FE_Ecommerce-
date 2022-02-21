import React from "react";
import { Button, Col, Row, Table } from "reactstrap";
import { useState, useEffect } from "react";

export default function List({ data, handleEdit, handleDelete }) {
  useEffect(() => {
    const header = ["No", "Name", "Quantity", "Price", "Action"];
    setHeader(header);
  }, []);

  const [headers, setHeader] = useState([]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>{header} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{row.name}</td>
              <td>{row.quantity}</td>
              <td>{row.price}</td>
              <td>
                <Button onClick={() => handleEdit(row.id)}> Update</Button>

                <Button color="danger" onClick={() => handleDelete(row.id)}>
                  {" "}
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

