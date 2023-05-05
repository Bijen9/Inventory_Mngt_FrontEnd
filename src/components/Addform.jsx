import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import "../stylesheets/AddForm.css";

function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [threshold, setThreshold] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [newCategoryInput, setNewCategoryInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  const handleCategoryChange = (selectedOption) => {
    console.log("handleCategoryChange called");
    const value = selectedOption.value;
    if (value === "add_category") {
      // If "Add Category" option is selected, show input field
      setShowNewCategoryInput(true);
    } else {
      // Otherwise, set the selected category
      setCategory(value);
      setShowNewCategoryInput(false);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories from the database
        const response = await axios.get("/api/categories");
        const categories = response.data;

        setCategories(categories);
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to fetch categories from the database.");
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!name || !category) {
      setShowErrors(true);
      return;
    }

    try {
      // Check if product already exists in the database
      const response = await axios.get(`/api/products?name=${name}`);
      const product = response.data;
      if (product) {
        setErrorMessage("Product already exists in the database.");
        return;
      }

      // Submit product to the database
      const user = await axios.get("/api/current_user");
      await axios.post("/api/products", {
        name,
        description,
        threshold: threshold || 0,
        category,
        user: user.data.id,
      });

      // Reset form fields
      setName("");
      setDescription("");
      setThreshold("");
      setCategory("");

      // Show success message
      alert("Product successfully added to the database.");
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to add product to the database.");
    }
  };

  const handleNewCategorySubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      // Check if category already exists in the database
      const response = await axios.get(
        `/api/categories?name=${newCategoryInput}`
      );
      const category = response.data;
      if (category) {
        setErrorMessage("Category already exists in the database.");
        return;
      }

      // Submit new category to the database
      await axios.post("/api/categories", {
        name: newCategoryInput,
      });

      // Add new category to the list of categories
      setCategories([...categories, { name: newCategoryInput }]);

      // Set the new category as selected
      setCategory(newCategoryInput);

      // Reset new category input
      setNewCategoryInput("");

      // Hide new category input
      setShowNewCategoryInput(false);

      // Show success message
      alert("Category successfully added to the database.");
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to add category to the database.");
    }
  };

  const categoryOptions = categories.map((category) => ({
    value: category.name,
    label: category.name,
  }));

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Category:<span className="required">*</span>
        </label>
        {!showNewCategoryInput ? (
          <Select
            value={{ value: category, label: category }}
            onChange={handleCategoryChange}
            options={[
              { value: "add_category", label: "Add Category" },
              ...categoryOptions,
            ]}
            className="options"
            required
          />
        ) : (
          <div className="new-category-input">
            <input
              type="text"
              value={newCategoryInput}
              onChange={(event) => setNewCategoryInput(event.target.value)}
              placeholder="Enter New Category Name"
            />

            <button onClick={handleNewCategorySubmit} className="addbtn">
              Add
            </button>
          </div>
        )}
      </div>
      {showErrors && !category && (
        <p className="error-message">
          Please select a category before submitting
        </p>
      )}
      <div className="form-group">
        <label>
          Name:<span className="required">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      {showErrors && !name && (
        <p className="error-message">Please enter name before submitting</p>
      )}
      <div className="form-group">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Threshold:</label>
        <input
          type="number"
          value={threshold}
          onChange={(event) => setThreshold(event.target.value)}
        />
      </div>
      <button type="submit" className="submitbtn">
        Submit
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}

export default AddProductForm;
