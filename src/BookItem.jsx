import './BookItem.css';

const BookItem = ({ book }) => {
  return (
    <div className='book-item'>
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
      <h4>{book.year}</h4>
    </div>
  );
};

export default BookItem;
