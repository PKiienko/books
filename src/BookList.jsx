import './BookList.css';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  if (books.length === 0) {
    return null;
  }

  const sortedBooks = books.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

  return (
    <div className='book-list'>
      {sortedBooks.map((sortedBook) => {
        return <BookItem key={Math.random()} sortedBook={sortedBook} />;
      })}
    </div>
  );
};

export default BookList;
