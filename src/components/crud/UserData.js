import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddEditForm from "./AddEditForm";
import { Button } from "react-bootstrap-v5";
import { deleteItem } from "../slice/UserSlice";

const UserData = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const [editItem, setEditItem] = useState(null);

  const handleEdit = (items) => {
    setEditItem(items);
  };

  return (
    <div>
      <h2>User Data Liist</h2>
      {items.map((data) => (
        <div key={data.id}>
          <span>{data.name}</span>
          <span>{data.email}</span>
          <span>{data.age}</span>
          <Button onClick={() => handleEdit(data)}>Edit</Button>
          <Button onClick={() => dispatch(deleteItem(data.id))}>Delete</Button>
        </div>
      ))}
      {editItem && (
        <AddEditForm editItem={editItem} onClose={() => setEditItem(null)} />
      )}
    </div>
  );
};

export default UserData;
