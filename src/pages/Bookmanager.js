import React, { useState } from "react";
import '../styles/BookManager.css'

function BookManager() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [books, setBooks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [error, setError] = useState("");

  function clearForm() {
    setTitle("");
    setAuthor("");
    setPrice("");
    setCategory("");
    setDescription("");
    setEditIndex(-1);
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const numericPrice = Number(price);

    // Validate price
    if (
      price === "" ||
      isNaN(numericPrice) ||
      numericPrice <= 0
    ) {
      setError("Please enter a valid positive price.");
      return;
    }

    // Validate category
    if (category === "") {
      setError("Please select a category.");
      return;
    }

    const newBook = {
      title: title,
      author: author,
      price: numericPrice,
      category: category,
      description: description
    };

    if (editIndex === -1) {
      // Add new book
      setBooks([...books, newBook]);
      alert("Book added successfully!");
    } else {
      // Update existing book
      const updatedBooks = [...books];
      updatedBooks[editIndex] = newBook;
      setBooks(updatedBooks);
      alert("Book updated successfully!");
    }

    clearForm();
  }

  // Delete book with confirmation
  function deleteBook(index) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (confirmDelete) {
      const updatedBooks = books.filter(
        (book, i) => i !== index
      );

      setBooks(updatedBooks);

      if (editIndex === index) {
        clearForm();
      } else if (editIndex > index) {
        setEditIndex(editIndex - 1);
      }

      alert("Book deleted successfully!");
    }
  }

  // Load selected book into form for updating
  function updateBook(index) {
    const book = books[index];

    setTitle(book.title);
    setAuthor(book.author);
    setPrice(book.price);
    setCategory(book.category);
    setDescription(book.description);
    setEditIndex(index);
    setError("");
  }

  return (
    <div className="book-container">
      <h1 className="book-title">Online Bookstore - Book Management</h1>

      <form className="book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Book Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price ($):</label>
          <input
            id="price"
            type="number"
            min="1"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Select Category --</option>
            <option value="Programming">Programming</option>
            <option value="Novels">Novels</option>
            <option value="Science">Science</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {error && (
          <p role="alert" className="error-message">
            {error}
          </p>
        )}

        <div className="form-buttons">
          <button type="submit" className="btn-submit">
            {editIndex === -1 ? "Add Book" : "Save Update"}
          </button>

          {editIndex !== -1 && (
            <button type="button" className="btn-cancel" onClick={clearForm}>
              Cancel Update
            </button>
          )}
        </div>
      </form>

      <hr className="divider" />

      <h2 className="section-title">Books Inventory</h2>

      <div className="table-responsive">
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>${book.price}</td>
                <td>{book.category}</td>
                <td>{book.description}</td>
                <td>
                  <button
                    type="button"
                    className="btn-update"
                    onClick={() => updateBook(index)}
                  >
                    Update
                  </button>

                  <button
                    type="button"
                    className="btn-delete"
                    onClick={() => deleteBook(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {books.length === 0 && (
        <p className="no-books">No books available in the store.</p>
      )}
    </div>
  );
}

export default BookManager;