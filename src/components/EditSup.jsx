import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/EditSup.css";
import SupForm from "./SupForm";

const EditSup = () => {
  const initialData = [
    {
      id: 1,
      name: "John",
      location: "Dhulikhel",
      phonenumber: 9842222222,
      email: "abcd@gmail.com",
    },
    {
      id: 2,
      name: "Jane",
      location: "Dhulikhel",
      phonenumber: 9842222222,
      email: "abcd@gmail.com",
    },
    {
      id: 3,
      name: "Bob",
      location: "Dhulikhel",
      phonenumber: 9842222222,
      email: "abcd@gmail.com",
    },
    {
      id: 4,
      name: "Alice",
      location: "Dhulikhel",
      phonenumber: 9842222222,
      email: "abcd@gmail.com",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(initialData);
  const [editData, setEditData] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredResults = initialData.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleDelete = (id) => {
    const updatedResults = searchResults.filter((item) => item.id !== id);
    setSearchResults(updatedResults);
  };

  const handleEdit = (id) => {
    const selectedData = searchResults.find((item) => item.id === id);
    setEditData(selectedData);
  };

  const handleFormClose = () => {
    setEditData(null);
  };

  return (
    <div className="table-wrapper">
      {editData ? (
        <SupForm
          editData={editData}
          handleClose={handleFormClose}
        />
      ) : (
        <>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
          />
          <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td>{item.phonenumber}</td>
              <td>{item.email}</td>
              <td>
                <FontAwesomeIcon
                  className="edit"
                  icon={faEdit}
                      onClick={() => handleEdit(item.id)}
                    />
                <FontAwesomeIcon
                  className="trash"
                  icon={faTrash}
                  onClick={() => handleDelete(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
      )}
    </div>
  );
};

export default EditSup;
