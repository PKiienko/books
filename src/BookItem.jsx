import { useState } from 'react';
import './BookItem.css';

import {
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
  MdOutlineModeEditOutline,
  MdClose,
} from 'react-icons/md';
import { BsFillBookmarkCheckFill, BsBookmarkCheck } from 'react-icons/bs';

const BookItem = ({ sortedBook, books, setBooks, handleEditBook }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
      {showDeleteModal && (
        <div className='modal-content'>
          <h4>Ви дійсно хочете видалити цю книгу?</h4>
          <h2>{sortedBook.title}</h2>
          <div className='modal-actions'>
            <button className='modal-button-confirm' onClick={deleteBookHandler}>
              Так
            </button>
            <button className='modal-button-cancel' onClick={() => setShowDeleteModal(false)}>
              Ні
            </button>
          </div>
        </div>
      )}

      {!showDeleteModal && (
        <>
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
                title={'Улюблена'}
              />
            ) : (
              <MdOutlineFavoriteBorder
                className={`favorite book-item-button`}
                onClick={toggleFavorite}
                title={'Не улюблена'}
              />
            )}
            {sortedBook.read ? (
              <BsFillBookmarkCheckFill
                className={` book-item-button`}
                onClick={toggleRead}
                title={'Прочитана'}
              />
            ) : (
              <BsBookmarkCheck
                className={`favorite book-item-button`}
                onClick={toggleRead}
                title={'Не прочитана'}
              />
            )}
            <MdOutlineModeEditOutline
              className='book-item-button'
              onClick={() => handleEditBook(sortedBook)}
              title={'Редагувати'}
            />
            <MdClose
              className='book-item-button'
              onClick={() => setShowDeleteModal(true)}
              title={'Видалити'}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BookItem;
