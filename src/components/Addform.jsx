import React, { useState } from "react";
import "../stylesheets/AddForm.css";

function AddForm() {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [supplier, setSupplier] = useState("");
  const [remarks, setRemarks] = useState("");
  const [formErrors, setFormErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let errors = {};
    if (!category) {
      errors.category = "Please select a category";
    }
    if (!productName) {
      errors.productName = "Please enter the name of the product";
    }
    if (!quantity) {
      errors.quantity = "Please enter the quantity";
    }
    if (!purchaseDate) {
      errors.purchaseDate = "Please select the purchase date";
    }
    if (!expiryDate) {
      errors.expiryDate = "Please select the expiry date";
    }
    if (!supplier) {
      errors.supplier = "Please select a supplier";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // submit the form
      alert("Form submitted!");
    }
  }

  return (
    <div>
      <h2>Add Product Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="category">
          Category<span className="required">*</span>
        </label>
        <div className="form-group">
          <select
            id="category"
            name="category"
            className="form-control"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
          </select>
          {formErrors.category && (
            <div className="error">{formErrors.category}</div>
          )}
        </div>
        <label htmlFor="productName">
          Name of Product<span className="required">*</span>
        </label>
        <div className="form-group">
          <input
            type="text"
            id="productName"
            name="productName"
            className={`form-control ${formErrors.productName ? "error" : ""}`}
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
          {formErrors.productName && (
            <div className="error">{formErrors.productName}</div>
          )}
        </div>
        <label htmlFor="quantity">
          Quantity<span className="required">*</span>
        </label>
        <div className="form-group">
          <input
            type="number"
            id="quantity"
            name="quantity"
            className={`form-control ${formErrors.quantity ? "error" : ""}`}
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          {formErrors.quantity && (
            <div className="error">{formErrors.quantity}</div>
          )}
        </div>
        <label htmlFor="purchaseDate">
          Purchase Date<span className="required">*</span>
        </label>
        <div className="form-group">
          <input
            type="date"
            id="purchaseDate"
            name="purchaseDate"
            className={`form-control ${formErrors.purchaseDate ? "error" : ""}`}
            value={purchaseDate}
            onChange={(event) => setPurchaseDate(event.target.value)}
          />
          {formErrors.purchaseDate && (
            <div className="error">{formErrors.purchaseDate}</div>
          )}
        </div>
        <label htmlFor="expiryDate">
          Expiry Date<span className="required">*</span>
        </label>
        <div className="form-group">
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            className={`form-control ${formErrors.expiryDate ? "error" : ""}`}
            value={expiryDate}
            onChange={(event) => setExpiryDate(event.target.value)}
          />
          {formErrors.expiryDate && (
            <div className="error">{formErrors.expiryDate}</div>
          )}
        </div>
        <label htmlFor="supplier">
          Supplier<span className="required">*</span>
        </label>
        <div className="form-group">
          <select
            id="supplier"
            name="supplier"
            className={`form-control ${formErrors.supplier ? "error" : ""}`}
            value={supplier}
            onChange={(event) => setSupplier(event.target.value)}
          >
            <option value="">Select a supplier</option>
            <option value="ABC Company">ABC Company</option>
            <option value="XYZ Company">XYZ Company</option>
            <option value="PQR Company">PQR Company</option>
          </select>
          {formErrors.supplier && (
            <div className="error">{formErrors.supplier}</div>
          )}
        </div>
        <label htmlFor="remarks">Remarks</label>
        <div className="form-group">
          <textarea
            id="remarks"
            name="remarks"
            className={`form-control ${formErrors.remarks ? "error" : ""}`}
            value={remarks}
            onChange={(event) => setRemarks(event.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddForm;
