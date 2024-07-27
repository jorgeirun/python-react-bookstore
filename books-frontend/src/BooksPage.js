import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import { API_BASE_URL } from './constants';

function App() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url_path = `${API_BASE_URL}/books`;

  const onDataFetched = useCallback((data) => {
    setLoading(false);
    setBooks(data.data);
  }, []);

  useEffect(() => {
    fetch(`${API_BASE_URL}/books`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(onDataFetched)
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError(error.message || 'Unknown error');
      });
  }, [url_path, onDataFetched])

  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          {loading && <p>Loading..</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            < div className="books">
              {books.map((bookItem) => (
                <div key={bookItem.id} className="book">
                  <img src={bookItem.cover_url} alt={bookItem.title} className="book-cover" />
                  <div className="book-details">
                    <h3 className="book-title">{bookItem.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </header >
    </div >
  );
}

export default App;
