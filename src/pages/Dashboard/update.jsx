import React, { useEffect, useState } from "react";
import {
    Button,
    Row,
    Col,
    Input,
    FormGroup,
    Label,
    Form

} from "reactstrap";

const initialValue = {
    id: Math.random() * Date.now(),
    name: "",
    quantity: 0,
    price: 0

}

const UpdateProduct = ({ data, setData, setOpen, editedDataID }) => {

    const [form, setForm] = useState(initialValue);

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedData = data.map(
            (row, index) => (
                row.id === editedDataID ? data[index] = form : { ...row }
            )
        )

        setData(editedData)
        setOpen(false)
    }

    useEffect(() => {
        const editedData = data.filter(v => v.id === editedDataID)[0]
        setForm(editedData)
    }, [data, editedDataID]);


    return (
        <>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <>


                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                value={form.name}
                                onChange={(e) => setForm(prev => (
                                    {
                                        ...prev,
                                        name: e.target.value
                                    }
                                ))}
                                required
                            >
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>Quantity</Label>
                            <Input
                                value={form.quantity}
                                onChange={(e) => setForm(prev => (
                                    {
                                        ...prev,
                                        quantity: e.target.value
                                    }
                                ))}
                                required
                            >
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>Price</Label>
                            <Input
                                value={form.price}
                                onChange={(e) => setForm(prev => (
                                    {
                                        ...prev,
                                        price: e.target.value
                                    }
                                ))}
                                required
                            >
                            </Input>
                        </FormGroup>

                    </>

                    <Row>
                        <Col>
                            <Button type="submit" color="primary">Submit</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => setOpen(false)} color="secondary">Cancel</Button>
                        </Col>

                    </Row>

                </Form>
            </Row>
        </>
    )
}

export default UpdateProduct;