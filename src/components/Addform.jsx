import React, { useState } from 'react';

function AddForm() {
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [supplier, setSupplier] = useState('');
  const [remarks, setRemarks] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!category) {
      alert('Please select Category to save changes');
      return;
    }
    if (!productName) {
      alert('Please select Name of Product to save changes');
      return;
    }
    if (!quantity) {
      alert('Please select Quantity to save changes');
      return;
    }
    if (!purchaseDate) {
      alert('Please select Purchase Date to save changes');
      return;
    }
    if (!expiryDate) {
      alert('Please select Expiry Date to save changes');
      return;
    }
    if (!supplier) {
      alert('Please select Supplier to save changes');
      return;
    }
    // submit the form
    alert('Form submitted!');
  }

  return (
    <div>
      <h2>Add Product Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
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
        </div>
        <div className="form-group">
          <label htmlFor="productName">Name of Product</label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="form-control"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="form-control"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="purchaseDate">Purchase Date</label>
          <input
            type="date"
            id="purchaseDate"
            name="purchaseDate"
            className="form-control"
            value={purchaseDate}
            onChange={(event) => setPurchaseDate(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            className="form-control"
            value={expiryDate}
            onChange={(event) => setExpiryDate(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="supplier">Supplier</label>
          <select
            id="supplier"
            name="supplier"
            className="        form-control"
            value={supplier}
            onChange={(event) => setSupplier(event.target.value)}
          >
            <option value="">Select a supplier</option>
            <option value="ABC Company">ABC Company</option>
            <option value="XYZ Company">XYZ Company</option>
            <option value="PQR Company">PQR Company</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="remarks">Remarks</label>
          <textarea
            id="remarks"
            name="remarks"
            className="form-control"
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
