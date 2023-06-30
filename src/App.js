import { useState } from 'react';
import './App.css';
import BookList from './BookList';
import Form from './Form';

function App() {
  const [books, setBooks] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);

  const sortedBooks = books.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

  const handleEditBook = (book) => {
    setIsEditMode(true);
    setBookToEdit(book);
  };

  // const saveBooksToLocalStorage = () => {
  //   if (books.length > 0) {
  //     localStorage.setItem('books', JSON.stringify(books));
  //   }
  // };

  // const getBooksFromLocalStorage = () => {
  //   if (localStorage.getItem('books') === null) {
  //     localStorage.setItem('books', JSON.stringify([]));
  //   } else {
  //     let booksFromLocalStorage = JSON.parse(localStorage.getItem('books'));
  //     console.log('local:', booksFromLocalStorage);
  //     setBooks(booksFromLocalStorage);
  //   }
  // };

  // useEffect(() => {
  //   getBooksFromLocalStorage();
  // }, []);

  // useEffect(() => {
  //   saveBooksToLocalStorage();
  // }, [books]);

  return (
    <div className='app'>
      <h1 className='app-title'>Книжкові скарби</h1>
      <Form
        books={books}
        setBooks={setBooks}
        isEditMode={isEditMode}
        bookToEdit={bookToEdit}
        setIsEditMode={setIsEditMode}
        setBookToEdit={setBookToEdit}
      />
      <BookList
        books={books}
        setBooks={setBooks}
        sortedBooks={sortedBooks}
        handleEditBook={handleEditBook}
      />
    </div>
  );
}

export default App;
