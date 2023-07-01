import './BookItem.css';

import {
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
  MdOutlineModeEditOutline,
  MdClose,
} from 'react-icons/md';
import { BsFillBookmarkCheckFill, BsBookmarkCheck } from 'react-icons/bs';

const BookItem = ({ sortedBook, books, setBooks, handleEditBook }) => {
  const toggleFavorite = () => {
    const updatedBooks = books.map((book) =>
      book.id === sortedBook.id ? { ...book, favorite: !book.favorite } : book
    );
    setBooks(updatedBooks);
  };

  const toggleRead = () => {
    const updatedBooks = books.map((book) =>
      book.id === sortedBook.id ? { ...book, read: !book.read } : book
    );
    setBooks(updatedBooks);
  };

  const deleteBookHandler = () => {
    setBooks(books.filter((el) => el.id !== sortedBook.id));
  };

  return (
    <div className='book-container'>
      <div className='book-item'>
        <h2>{sortedBook.title}</h2>
        <div>
          <h4>{sortedBook.author}</h4>
          <h4>{sortedBook.year}</h4>
        </div>
      </div>
      <div className='book-controls'>
        {sortedBook.favorite ? (
          <MdOutlineFavorite
            className={`book-item-button`}
            onClick={toggleFavorite}
            title={'Favorite'}
          />
        ) : (
          <MdOutlineFavoriteBorder
            className={`favorite book-item-button`}
            onClick={toggleFavorite}
            title={'Favorite'}
          />
        )}
        {sortedBook.read ? (
          <BsFillBookmarkCheckFill
            className={` book-item-button`}
            onClick={toggleRead}
            title={'Read'}
          />
        ) : (
          <BsBookmarkCheck
            className={`favorite book-item-button`}
            onClick={toggleRead}
            title={'Read'}
          />
        )}
        <MdOutlineModeEditOutline
          className='book-item-button'
          onClick={() => handleEditBook(sortedBook)}
          title={'Edit'}
        />
        <MdClose className='book-item-button' onClick={deleteBookHandler} title={'Delete'} />
      </div>
    </div>
  );
};

export default BookItem;
