import React, { useState } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEditForm from "./components/crud/AddEditForm";
import UserData from "./components/crud/UserData";
import { Button } from "react-bootstrap-v5";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <div className="">
      {" "}
      <BrowserRouter>
        {" "}
        <Routes>
          <Route path="/" element={<Login />} />
          {showAddForm ? (
            <Route
              path="/crud"
              element={<AddEditForm onClose={() => setShowAddForm(true)} />}
            />
          ) : (
            <React.Fragment>
              <Button onClick={() => setShowAddForm(true)}>Add New Data</Button>
            </React.Fragment>
          )}{" "}
          <Route path="/crud" element={<UserData />} />
        </Routes>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
