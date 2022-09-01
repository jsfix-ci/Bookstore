import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../Redux/book/book';
import './AddBookForm.css';

const AddBookForm = () => {
  // Hooks
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  // handler form submit
  const AddBookHandler = (e) => {
    e.preventDefault();
    dispatch(addBook({
      title,
      author,
      category,
      item_id: uuidv4(),
    }));
  };

  return (
    <div className="add-book-section">
      <h3 className="add-book-section-title">Add a new book</h3>
      <form className="add-book-form" onSubmit={AddBookHandler}>
        <input placeholder="Book Title" maxLength="40" required onInput={(e) => setTitle(e.target.value)} />
        <input placeholder="Author" maxLength="40" required onInput={(e) => setAuthor(e.target.value)} />
        {/* categories button */}
        <select
          className="categories"
          name="categoriesList"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          required
        >
          <option value="">Category</option>
          <option value="Literary Fiction">Literary Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
          <option value="Historical">Historical</option>
          <option value="Romance">Romance</option>
          <option value="Western">Western</option>
          <option value="Bildungsroman">Bildungsroman</option>
          <option value="Speculative Fiction">Speculative Fiction</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Magical Realism">Magical Realism</option>
          <option value="Realist Literature">Realist Literature</option>
        </select>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
