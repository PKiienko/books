import { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState(null);

  return (
    <div className='app'>
      <h2 className='app-title'>Книжкові скарби</h2>
      <div className='book-info'>
        <input className='book-title' placeholder='Назва книги' />
        <input className='book-author' placeholder='Автор' />
        <input className='book-year' placeholder='Рік видання' />
        <button className='add-button'>Додати</button>
      </div>
    </div>
  );
}

export default App;
