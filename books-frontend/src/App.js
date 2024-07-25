import React, { useState } from 'react';
import DataFetcher from './DataFetcher';
import './App.css';

function App() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDataFetched = (fetchedData) => {
    if (fetchedData.error) {
      setError(fetchedData.error);
    } else {
      const booksList = fetchedData.data.map(bookItem => ({
        id: bookItem.id,
        title: bookItem.title,
        cover_url: bookItem.cover_url,
      }));
      setBooks(booksList);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <DataFetcher onDataFetched={handleDataFetched} />
        {loading && <p>Loading..</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <div className="main">
            <div className="books">
              {books.map((bookItem) => (
                <div key={bookItem.id} className="book">
                  <img src={bookItem.cover_url} alt={bookItem.title} className="book-cover" />
                  <div className="book-details">
                    <h3 className="book-title">{bookItem.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        )}
      </header>
    </div>
  );
}

export default App;
