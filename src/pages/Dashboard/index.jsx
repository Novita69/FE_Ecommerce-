import React, {
    useState,
    useEffect
} from "react";
import {
    Table,
    Button, Modal,
    ModalHeader,
    ModalBody
} from "reactstrap";
import AddProduct from "./create";
import UpdateProduct from "./update";


// const dummy = [
//     {
//         "id": "323234342",
//         "name": "Baju",
//         "quantity": 200,
//         "price": 200000,


//     },
//     {
//         "id": "12121212",
//         "name": "Celana",
//         "quantity": 400,
//         "price": 100000


//     }
// ]

const header = ["No", "Id", "Name", "Quantity", "Price", "Action"];

const PageDashboard = () => {

    const [data, setData] = useState([]);
    const [createModalVisible, setCreateModalVisible] = useState(false);
    const [updateModalVisible, setUpdateModalVisible] = useState(false);
    const [editedDataID, setEditedDataID] = useState({});

    const handleDelete = (id) => {
        const UpdateProduct = data.filter((v) => v.id !== id);
        setData(UpdateProduct);
    }

    const handleEdit = (id) => {
        setEditedDataID(id);
        setUpdateModalVisible(true);

    }

    const getData = async () => {
        const {code, product, msg} = await getProducts();
        if(code === 200) {
            setData(products)
        } else {
            alert(msg)
        }
    }

    useEffect(() => {
        getData();
        // setData(dummy);
    }, [])


    return (
        <div style={{ margin: "50px" }}>

            <h1 style={{ textAlign: "center" }}>BASIC CRUD REACT JS</h1>
            <br />

            <Button
                color="primary"
                onClick={() => setCreateModalVisible(true)}>Add Product ( + ) </Button>

            <Table
            >
                <thead>
                    <tr>
                        {header.map((value, idx) => (
                            <th key={idx}>{value}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((value, idx) => (
                        <tr key={idx}>

                            {/*penomoran tabel*/}
                            <th scope="row">
                                {idx + 1}
                            </th>

                            {/*list data*/}
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.quantity}</td>
                            <td>{value.price}</td>

                            {/*Action Button*/}

                            <td>
                                <Button onClick={() => handleEdit(value.id)}>Edit</Button>
                            </td>

                            <td>
                                <Button onClick={() => handleDelete(value.id)}>Delete</Button>
                            </td>



                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal Create Form */}

            <Modal isOpen={createModalVisible} toggle={() => setCreateModalVisible(!createModalVisible)}>
                <ModalHeader>Add Product</ModalHeader>
                <ModalBody>
                    <AddProduct
                        data={data}
                        setOpen={setCreateModalVisible}
                    />
                </ModalBody>
            </Modal>

            {/* Modal Update Form */}

            <Modal isOpen={updateModalVisible} toggle={() => setUpdateModalVisible(!updateModalVisible)}>
                <ModalHeader>Update Product</ModalHeader>
                <ModalBody>
                    <UpdateProduct
                        data={data}
                        setOpen={setUpdateModalVisible}
                        editedDataID={editedDataID}
                        setData={setData}
                    />
                </ModalBody>
            </Modal>



        </div>
    )
}

export default PageDashboard;