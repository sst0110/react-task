import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap-v5";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "../slice/UserSlice";

const AddEditForm = ({ editItem, onClose }) => {
  const [name, setName] = useState(editItem ? editItem.name : "");
  const [email, setEmail] = useState(editItem ? editItem.email : "");
  const [age, setAge] = useState(editItem ? editItem.age : "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem) {
      dispatch(updateItem({ id: editItem.id, name, email, age }));
    } else {
      dispatch(addItem({ id: Date.now(), name, email, age }));
    }
    setName("");
    setEmail("");
    setAge("")
    onClose()
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">{editItem ? "Update" : "Add"}</Button>
        <Button onClick={onClose}>Cancel</Button>
      </Form>
    </div>
  );
};

export default AddEditForm;
