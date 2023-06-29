import { useState, useEffect, useCallback } from 'react';
import './App.css';
import BookList from './BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const saveBooksToLocalStorage = useCallback(() => {
    if (books.length > 0) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  }, [books]);

  const getBooksFromLocalStorage = useCallback(() => {
    if (localStorage.getItem('books') === null) {
      localStorage.setItem('books', JSON.stringify([]));
    } else {
      let booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));
      console.log('local:', booksFromLocalStorage);
      setBooks(booksFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    getBooksFromLocalStorage();
  }, [getBooksFromLocalStorage]);

  useEffect(() => {
    saveBooksToLocalStorage();
  }, [saveBooksToLocalStorage]);

  const titleInputHandler = (e) => {
    setTitle(e.target.value);
  };
  const authorInputHandler = (e) => {
    setAuthor(e.target.value);
  };
  const yearInputHandler = (e) => {
    setYear(e.target.value);
  };

  const addBookHandler = () => {
    const newBook = {
      title: title,
      author: author,
      year: year,
    };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <div className='app'>
      <h1 className='app-title'>Книжкові скарби</h1>
      <div className='form-container'>
        <div className='book-info'>
          <input
            className='book-title'
            placeholder='Назва книги'
            value={title}
            onChange={titleInputHandler}
          />
          <div style={{ display: 'flex' }}>
            <input
              className='book-author'
              placeholder='Автор'
              value={author}
              onChange={authorInputHandler}
            />
            <input
              className='book-year'
              placeholder='Рік'
              value={year}
              onChange={yearInputHandler}
            />
          </div>
        </div>
        <button className='add-button' onClick={addBookHandler}>
          +
        </button>
      </div>
      <BookList books={books} />
    </div>
  );
}

export default App;
