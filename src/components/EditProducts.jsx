import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/EditSup.css";

const EditProducts = (props) => {
  const data = [
    {
      id: 1,
      category: "Device",
      name: "Printer",
      threshold: "1",
    },
    {
      id: 2,
      category: "Device",
      name: "Printer",
      threshold: "1",
    },
    {
      id: 3,
      category: "Device",
      name: "ass",
      threshold: "1",
    },
    {
      id: 4,
      name: "John",
      location: "Dhulikhel",
      phonenumber: 9842222222,
      email: "abcd@gmail.com",
    },
    {
      id: 5,
      name: "Jane",
      location: "Dhulikhel",
      phonenumber: 9842222222,
      email: "abcd@gmail.com",
    },
    {
      id: 6,
      name: "Bob",
      location: "Dhulikhel",
      phonenumber: 9842222222,
      email: "abcd@gmail.com",
    },
    {
      id: 7,
      name: "Alice",
      location: "Dhulikhel",
      phonenumber: 9842222222,
      email: "abcd@gmail.com",
    },
    {
      id: 8,
      name: "John",
      location: "Dhulikhel",
      phonenumber: 9842222222,
      email: "abcd@gmail.com",
    },
    {
      id: 9,
      name: "Jane",
      location: "Dhulikhel",
      phonenumber: 9842222222,
      email: "abcd@gmail.com",
    },
    {
      id: 10,
      name: "Bob",
      location: "Dhulikhel",
      phonenumber: 9842222222,
      email: "abcd@gmail.com",
    },
    {
      id: 11,
      name: "Alice",
      location: "Dhulikhel",
      phonenumber: 9842222222,
      email: "abcd@gmail.com",
    },
    // ... rest of the data objects
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    setSearchResults(filteredResults);
  };

  const handleDelete = (id) => {
    const updatedResults = searchResults.filter((item) => item.id !== id);
    setSearchResults(updatedResults);
  };

  return (
    <div className="table-wrapper">
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
            <th>Category</th>
            <th>Name</th>
            <th>Threshold</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.threshold}</td>
              <td>
                <FontAwesomeIcon
                  className="edit"
                  icon={faEdit}
                  onClick={() => handleDelete(item.id)}
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
    </div>
  );
};

export default EditProducts;
