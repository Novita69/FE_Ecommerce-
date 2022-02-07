import React, { useState } from "react";
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
    price: 0,
    stock: 0,
    category: ""
}

const AddProduct = ({ data, setOpen }) => {

    const [form, setForm] = useState(initialValue);

    const handleSubmit = (e) => {
        e.preventDefault();
        data.push(form);
        setOpen(false)
    }


    return (
        <>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <>
                        {/* name */}

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
                        {/* price */}
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
                        {/* stock */}
                        <FormGroup>
                            <Label>Stock</Label>
                            <Input
                                value={form.stock}
                                onChange={(e) => setForm(prev => (
                                    {
                                        ...prev,
                                        stock: e.target.value
                                    }
                                ))}
                                required
                            >
                            </Input>
                        </FormGroup>
                        {/* category */}
                        <FormGroup>
                            <Label>Category</Label>
                            <Input
                                value={form.category}
                                onChange={(e) => setForm(prev => (
                                    {
                                        ...prev,
                                        category: e.target.value
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

export default AddProduct;