import './BookItem.css';

const BookItem = ({ sortedBook, books, setBooks, handleEditBook }) => {
  const deleteBookHandler = () => {
    setBooks(books.filter((el) => el.id !== sortedBook.id));
  };

  return (
    <div className='book-container'>
      <div className='book-item'>
        <h2>{sortedBook.title}</h2>
        <h4>{sortedBook.author}</h4>
        <h4>{sortedBook.year}</h4>
      </div>
      <div className='book-controls'>
        <button>F</button>
        <button>R</button>
        <button onClick={() => handleEditBook(sortedBook)}>E</button>
        <button onClick={deleteBookHandler}>D</button>
      </div>
    </div>
  );
};

export default BookItem;
