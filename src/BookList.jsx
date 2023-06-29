import './BookList.css';
import BookItem from './BookItem';

const BookList = ({ books, setBooks, sortedBooks, handleEditBook }) => {
  if (books.length === 0) {
    return null;
  }

  return (
    <div className='book-list'>
      {sortedBooks.map((sortedBook) => {
        return (
          <BookItem
            key={Math.random()}
            sortedBook={sortedBook}
            books={books}
            setBooks={setBooks}
            handleEditBook={handleEditBook}
          />
        );
      })}
    </div>
  );
};

export default BookList;
