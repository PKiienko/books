import './BookItem.css';

const BookItem = ({ sortedBook }) => {
  return (
    <div className='book-item'>
      <h2>{sortedBook.title}</h2>
      <h4>{sortedBook.author}</h4>
      <h4>{sortedBook.year}</h4>
    </div>
  );
};

export default BookItem;
