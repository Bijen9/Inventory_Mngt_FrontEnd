import React, { useState } from "react";
import "../stylesheets/editUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const EditUser = (props) => {
  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
    { id: 4, name: "Alice", age: 28 },
    { id: 5, name: "Alice", age: 28 },
    { id: 6, name: "Alice", age: 28 },
    { id: 7, name: "Alice", age: 28 },
    { id: 8, name: "Alice", age: 28 },
    { id: 9, name: "Alice", age: 28 },
    { id: 10, name: "Alice", age: 28 },
    { id: 11, name: "Alice", age: 28 },
    { id: 12, name: "Alice", age: 28 },
    { id: 13, name: "Alice", age: 28 },
    { id: 14, name: "Alice", age: 28 },
    { id: 15, name: "Alice", age: 28 },
    { id: 16, name: "Alice", age: 28 },
    { id: 17, name: "Alice", age: 28 },
    { id: 18, name: "Alice", age: 28 },
    { id: 19, name: "Alice", age: 28 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
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
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                {props.type === "request" && (
                  <>
                    <button
                      className="tick-button"
                      onClick={() => handleDelete(item.id)}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button
                      className="icon-button"
                      id="reject"
                      onClick={() => handleDelete(item.id)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </>
                )}

                {props.type === "user" && (
                  <>
                    <button
                      className="admin-button"
                      onClick={() => handleDelete(item.id)}
                    >
                      Make Admin
                    </button>
                    <button
                      className="admin-button"
                      onClick={() => handleDelete(item.id)}
                    >
                      Remove Admin
                    </button>{" "}
                    <button
                      className="admin-button"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete User
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditUser;
