import { useState, useEffect } from 'react';

const Form = ({ books, setBooks, isEditMode, bookToEdit, setIsEditMode, setBookToEdit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const titleInputHandler = (e) => {
    setTitle(e.target.value);
  };
  const authorInputHandler = (e) => {
    setAuthor(e.target.value);
  };
  const yearInputHandler = (e) => {
    setYear(e.target.value);
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    if (title && author && year) {
      const newBook = {
        title: title,
        author: author,
        year: year,
        id: Math.random(),
        favorite: false,
        read: false,
      };
      setBooks([...books, newBook]);
      setTitle('');
      setAuthor('');
      setYear('');
    }
  };

  const editBookHandler = (e) => {
    e.preventDefault();
    if (title && author && year) {
      const editedBook = {
        title: title,
        author: author,
        year: year,
        id: bookToEdit.id,
        favorite: bookToEdit.favorite,
        read: bookToEdit.read,
      };
      const updatedBooks = books.map((book) => (book.id === bookToEdit.id ? editedBook : book));
      setBooks(updatedBooks);
      setIsEditMode(false);
      setBookToEdit(null);
      setTitle('');
      setAuthor('');
      setYear('');
    }
  };

  useEffect(() => {
    if (isEditMode && bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
      setYear(bookToEdit.year);
    }
  }, [isEditMode, bookToEdit]);

  return (
    <form className='form-container'>
      <div className='book-info'>
        <input
          className='book-title'
          placeholder='Назва книги'
          value={title}
          onChange={titleInputHandler}
        />
        <div style={{ display: 'flex', flex: 1 }}>
          <input
            className='book-author'
            placeholder='Автор'
            value={author}
            onChange={authorInputHandler}
          />
          <input className='book-year' placeholder='Рік' value={year} onChange={yearInputHandler} />
        </div>
      </div>
      <button
        className='add-button'
        onClick={isEditMode && bookToEdit ? editBookHandler : addBookHandler}
        title={isEditMode ? 'Save changes' : 'Add new book'}
      >
        {isEditMode ? 'ok' : '+'}
      </button>
    </form>
  );
};

export default Form;
