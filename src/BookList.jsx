import './BookList.css';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  if (books.length === 0) {
    return null;
  }
  return (
    <div className='book-list'>
      {books.map((book) => {
        return <BookItem key={Math.random()} book={book} />;
      })}
    </div>
  );
};

export default BookList;
